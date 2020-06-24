import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-navigation'

class DeckListView extends Component {

	Decks = {
		1: {id: 1, name: 'My first deck', cards: 3},
		2: {id: 2, name: 'My second deck', cards: 4},
		3: {id: 3, name: 'My third deck', cards: 6},
		4: {id: 4, name: 'My fourth deck', cards: 1},
		5: {id: 5, name: 'My fifth deck', cards: 2},
		6: {id: 6, name: 'My sixth deck', cards: 5},
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
					<Text style={styles.deckCard}>{cards} cards</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render () {
		console.log('props: ', this.props)
	
		return (
			<View 
				style={styles.container}>
				<Text>Available decks: {this.Decks.length}</Text>
				<FlatList
					data={Object.values(this.Decks)}
		         	renderItem={(obj) => {return this.renderItem(obj)}}
         	        keyExtractor={item => item.id.toString()}
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

export default DeckListView
