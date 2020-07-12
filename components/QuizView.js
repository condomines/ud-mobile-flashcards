import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

/*displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete*/

function QuizView (props) {

    const [showAnswer, flipAnswer] = React.useState(false);
    const [cardIndex, setCardIndex] = React.useState(0);
    const [correctAnswers, setCorrectAnswers] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false)

    const { title, cards } = props.deck ? props.deck : {title: '', cards: []}

    console.log('props', props)

    let text = showAnswer ? cards[cardIndex].answer : cards[cardIndex].question

    const submit = (correct) => {
      if (correct) setCorrectAnswers(correctAnswers + 1)
      if (cardIndex + 1 === cards.length)
        setShowScore(true)
      else
        setCardIndex(cardIndex + 1)
    }

    const resetQuiz = () => {
      setCardIndex(0)
      setCorrectAnswers(0)
      setShowScore(false)
    }
    
    return (
      showScore === false 
      ?
        <View style={styles.container}>

        <Text style={styles.quizProgress}>{cardIndex + 1}/{cards.length}</Text>
              <TouchableOpacity onPress={() => flipAnswer(!showAnswer)}>
                  <Text style={styles.question}>{text}</Text>
                  <Text style={styles.selector}>{showAnswer ? 'Question' : 'Answer'}</Text>
              </TouchableOpacity>

          <TouchableOpacity style={{...styles.btn, ...styles.btnCorrect}}
              onPress={() => submit(true)} >
              <Text style={styles.btnCorrect}>Correct</Text>
            </TouchableOpacity>

          <TouchableOpacity style={{...styles.btn, ...styles.btnIncorrect}}
              onPress={() => submit(false)} >
              <Text style={styles.btnIncorrect}>Incorrect</Text>
            </TouchableOpacity>
        </View>
      : <View style={styles.container}>
        <Text style={styles.quizProgress}>{correctAnswers} correct answers out of {cards.length}</Text>
        <TouchableOpacity style={{...styles.btn, ...styles.btnCorrect}}
              onPress={() => resetQuiz()} >
              <Text style={styles.btnCorrect}>Restart Quiz</Text>
            </TouchableOpacity>

          <TouchableOpacity style={{...styles.btn, ...styles.btnIncorrect}}
              onPress={() => props.navigation.pop()}>
              <Text style={styles.btnIncorrect}>Back to deck</Text>
            </TouchableOpacity>
        </View>

		)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'stretch',
      marginTop: 10
    },
    title: {
        fontSize: 20,
        color: '#000',
        padding: 10
    },
    btn: {
      flexDirection: 'row',
      backgroundColor: '#000',
      borderRadius: 16,
      padding: 20,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 17,
      justifyContent: 'center',
      shadowRadius: 3,
      shadowOpacity: 0.8,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
        },
    },
    btnCorrect: {
        backgroundColor: 'green',
        color: 'white'
    },
    btnIncorrect: {
        backgroundColor: 'red',
        color: 'white'
    },
    question: {
        textAlign: 'center',
        fontSize: 30,

    },
    selector: {
        textAlign: 'center',
        color: 'red',
        paddingTop: 15,

    }
  })

const mapStateToProps = ( state, ownProps ) => {
  return {
    deck: state[ownProps.navigation.state.params.title]
   }
}

export default connect(mapStateToProps)(QuizView)