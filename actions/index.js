import { getDecks } from "../utils/Storage"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
    return {
      type: ADD_DECK,
      deck,
    }
  }

export function addCard (deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  }
}

export function initData () {
    return (dispatch) => {
//      dispatch(showLoading())
      return getDecks()
        .then(
          ({decks}) => {
            dispatch(receiveDecks(decks))
//            dispatch(hideLoading())
          })
    }
  }
}