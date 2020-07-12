import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

function DeckView (props) {
    const { navigate, state } = props.navigation 
    const { id } = state.params
    const { name, cards} = props.decks[id]

    return (
		<View 
			style={styles.container}>
			<Text style={styles.title}>{name}</Text>
            <Text style={styles.deckCards}>{cards.length} cards</Text>
            
		    <TouchableOpacity style={{...styles.btn, ...styles.btnAdd}}
	          onPress={() => navigate('AddCard', {id})} >
	        	<Text style={styles.btnAdd}>Add card</Text>
	        </TouchableOpacity>


		    <TouchableOpacity style={{...styles.btn, ...styles.btnStart}}
	          onPress={() => navigate('QuizView', {id})} >
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
        padding: 10,
        textAlign: 'center'
    },
    deckCards: {
        textAlign: 'center'
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

  const mapStateToProp = ( decks ) => {
    return { decks }
    }

export default connect(mapStateToProp)(DeckView)
