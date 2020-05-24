import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-navigation'

class AddDeck extends Component {

	Decks = [
		{id: 1, name: 'My first deck', cards: 3},
		{id: 2, name: 'My first deck', cards: 3},
		{id: 3, name: 'My first deck', cards: 3},
		{id: 4, name: 'My first deck', cards: 3},
		{id: 5, name: 'My first deck', cards: 3},
		{id: 6, name: 'My first deck', cards: 3},
		{id: 7, name: 'My second desk', cards: 2}
	]

	renderItem ({item, separators}) {
		const {name, cards} = item

		return (
			<TouchableOpacity style={styles.deckContainer}
				onPress={() => {
					console.log('Pressed')}} >
				<View >
					<Text style={styles.deckName}>{name}</Text>
					<Text style={styles.deckCard}>{cards} cards</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render () {
		return (
			<View 
				style={styles.container}>
				<Text>Add view</Text>
				<FlatList
					data={this.Decks}
		         	renderItem={this.renderItem}
         	        keyExtractor={item => item.id}
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

export default AddDeck
