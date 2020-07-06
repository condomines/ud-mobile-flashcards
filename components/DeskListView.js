import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-navigation'
import { connect } from 'react-redux'

class DeckListView extends Component {

	Decks = {
        1: {
			id: '1',
          name: 'React11',
          cards: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        2: {
			id: '2',
            name: 'JavaScript11',
            cards: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }

	onPress = (id) => {
		console.log('Pressed. id:', id)
		console.log('Deck: ', this.Decks[id].name)
		const { navigate } = this.props.navigation;
		navigate('DeckView', {deck: this.Decks[id]})
	}

	renderItem ({item, separators}) {
		const {name, cards} = item

		return (
			<TouchableOpacity style={styles.deckContainer}
				onPress={() => {this.onPress(item.id)}} >
				<View style={{alignItems: 'center'}}>
					<Text style={styles.deckName}>{name}</Text>
					<Text style={styles.deckCard}>{cards.length} cards</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render () {
		console.log('props: ', this.props)
		const { Decks } = this.props

		return (
			<View 
				style={styles.container}>
				<Text>Available decks: {Decks.length}</Text>
				<FlatList
					data={Object.values(Decks)}
		         	renderItem={(obj) => {return this.renderItem(obj)}}
         	        /*keyExtractor={item => item.id.toString()}*/
			        contentContainerStyle={{ padding: 10 }}
          		/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',

  },
  deckContainer: {
    alignItems: 'center',
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
  deckName: {
    fontSize: 20,
	color: '#fff'

  },
  deckCard: {
  	color: 'gray'
  }
})

const mapStateToProp = ( state ) => {
	return { Decks: state }
  }

export default connect(mapStateToProp)(DeckListView)
