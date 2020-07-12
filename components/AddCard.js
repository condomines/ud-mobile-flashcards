import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions/'

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function AddCard (props) {
    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');

    const submit = () => {
      props.addCard ({question, answer})
      props.navigation.pop()
    }

    return (
		<View 
			style={styles.container}>

<Text style={styles.quizProgress}>Add card</Text>

		    <TextInput style={styles.textInput}
		      onChangeText={text => setQuestion(text)}
		      value={question}
		      placeholder='Enter a question'
		    />
		    <TextInput style={styles.textInput}
		      onChangeText={text => setAnswer(text)}
		      value={answer}
		      placeholder='Enter an answer'
		    />

		    <TouchableOpacity style={styles.btnSubmit}
	          onPress={submit} >
	        	<Text style={{color: 'white'}}>Submit</Text>
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
    btnSubmit: {
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
    textInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
  })

const mapDispatchToProps = (dispatch, ownProps) => {
  const deckId = ownProps.navigation.state.params.id
  
  return {
    addCard: card => dispatch(addCard (deckId, card))
  }
}

export default connect(null, mapDispatchToProps)(AddCard)
