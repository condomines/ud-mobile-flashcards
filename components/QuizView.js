import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

/*displays a card question
an option to view the answer (flips the card)
a "Correct" button
an "Incorrect" button
the number of cards left in the quiz
Displays the percentage correct once the quiz is complete*/

function QuizView () {
    return (
		<View 
			style={styles.container}>
			<Text style={styles.quizProgress}>2/3</Text>
            <Text style={styles.question}>Does react native work with Android?</Text>
            <Text style={styles.answer}>Answer</Text>

		    <TouchableOpacity style={{...styles.btn, ...styles.btnCorrect}}
	          onPress={() => alert('Correct pressed')} >
	        	<Text style={styles.btnCorrect}>Correct</Text>
	        </TouchableOpacity>


		    <TouchableOpacity style={{...styles.btn, ...styles.btnIncorrect}}
	          onPress={() => alert('Incorrect pressed')} >
	        	<Text style={styles.btnIncorrect}>Incorrect</Text>
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
    answer: {
        textAlign: 'center',
        color: 'red',
        paddingTop: 15,

    }
  })

export default QuizView