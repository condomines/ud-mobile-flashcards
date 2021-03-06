import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-navigation'
import { connect } from 'react-redux'

class DeckListView extends Component {

	onPress = (title) => {
    const { decks } = this.props
		const { navigate } = this.props.navigation;
		navigate('DeckView', {title})
	}

	renderItem ({item, separators}) {
		const {title, cards} = item

		return (
			<TouchableOpacity style={styles.deckContainer}
				onPress={() => {this.onPress(item.title)}} >
				<View style={{alignItems: 'center'}}>
					<Text style={styles.deckName}>{title}</Text>
					<Text style={styles.deckCard}>{cards.length} cards</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render () {
		const { decks } = this.props

		return (
			<View 
				style={styles.container}>
				<Text>Available decks: {decks.length}</Text>
				<FlatList
					data={Object.values(decks)}
		         	renderItem={(obj) => {return this.renderItem(obj)}}
         	        keyExtractor={item => item.title}
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

const mapStateToProp = ( decks ) => {
	return { decks }
  }

export default connect(mapStateToProp)(DeckListView)
