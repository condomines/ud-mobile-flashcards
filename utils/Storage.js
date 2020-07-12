import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'UD-Mobile-Flashcards-Decks'

const demoData = {
  React: {
      title: 'React',
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
  JavaScript: {
      title: 'JavaScript',
      cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function getDecks () {
  AsyncStorage.removeItem(STORAGE_KEY, null)

  return AsyncStorage.getItem(STORAGE_KEY)
    .then(
      (res) => {
        if (res === null) {
          console.log('Generating demo data')
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(demoData))
          return demoData
        }
        console.log('Using the local store')
        return JSON.parse(res)
      })
}

export function saveDeckTitle(title) {
  const deck = {title: {title, cards: []}}
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
}

