import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import decks from './reducers'
import { initData } from './actions'
import middleware from './middleware'

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import DeskListView from './components/DeskListView'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import AddCard from './components/AddCard'

import { getDecks } from './utils/Storage'

const Tabs = createBottomTabNavigator({
  DeskListView: {
    screen: DeskListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards" size={24} color={ tintColor }/>
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name="circle-with-plus" size={24} color={ tintColor } />
    },
  }
} , {
  navigationOptions: {
    headerShown: false
  },
  tabBarOptions: {
    style: {
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deck.name}`,
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: `Add card`,
    }),
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.id}`,
    }),
  },
  

})

const AppContainer = createAppContainer(MainNavigator);

const store = createStore(decks, middleware)

function App() {

  const [test, setTest] = useState(0)

  useEffect(() => {
    console.log ('useEffect')
    store.dispatch(initData())
    setTest('myTest')
    }
    )

  getDecks()
  .then(
    (res) => {
      console.log('Decks: ', res)})


  return (
    <Provider store={store}>
      <AppContainer>
      </AppContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App
