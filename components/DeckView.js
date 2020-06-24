import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function DeckView () {

    return (
		<View 
			style={styles.container}>
			<Text style={styles.deckName}>Deck NAME</Text>
            <Text style={styles.deckCards}>4 cards</Text>
            
		    <TouchableOpacity style={{...styles.btn, ...styles.btnAdd}}
	          onPress={() => alert('Add card pressed')} >
	        	<Text style={styles.btnAdd}>Add card</Text>
	        </TouchableOpacity>


		    <TouchableOpacity style={{...styles.btn, ...styles.btnStart}}
	          onPress={() => alert('Start quiz pressed')} >
	        	<Text style={styles.btnStart}>Start quiz</Text>
	        </TouchableOpacity>


		    <TouchableOpacity style={{...styles.btn, ...styles.btnDelete}}
	          onPress={() => alert('Delete deck pressed')} >
	        	<Text style={styles.btnDelete}>Delete deck</Text>
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
    btnAdd: {
        backgroundColor: 'white',
        color: 'black'
    },
    btnStart: {
        backgroundColor: 'black',
        color: 'white'
    },
    btnDelete: {
        backgroundColor: 'transparent',
        color: 'red'
    },
  })

export default DeckView
