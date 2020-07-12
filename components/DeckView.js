import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { StackActions } from 'react-navigation';
import { removeDeck } from '../actions/'

function DeckView (props) {
  const { navigate } = props.navigation
  const { title, cards } = props.deck

  const remove = () => {
    props.removeDeck()
    props.navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.deckCards}>{cards.length} cards</Text>
            
      <TouchableOpacity style={{...styles.btn, ...styles.btnAdd}}
          onPress={() => navigate('AddCard', {title})} >
        <Text style={styles.btnAdd}>Add card</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{...styles.btn, ...styles.btnStart}}
          onPress={() => navigate('QuizView', {title})} >
        <Text style={styles.btnStart}>Start quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{...styles.btn, ...styles.btnDelete}}
          onPress={remove} >
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

const mapStateToProp = ( state, ownProps ) => {
  const { title } = ownProps.navigation.state.params
  return { deck: state[title] ? state[title] : {title: '', cards: []}}
}

const mapDispatchToProp = ( dispatch, ownProps ) => {
  return {
    removeDeck: () => dispatch(removeDeck(ownProps.navigation.state.params.title))
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(DeckView)
