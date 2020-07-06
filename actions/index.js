import { getDecks } from "../utils/Storage"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

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

export function showLoading() {
  console.log('show loading')
  return {
    type: SHOW_LOADING,
  }
}
export function hideLoading() {
  console.log('hide loading')
  return {
    type: HIDE_LOADING,
  }
}

export function initData () {
    return (dispatch) => {
      dispatch(showLoading())
      return getDecks()
        .then(
          (res) => {
            console.log('Decks in the action: ', res)
            dispatch(receiveDecks(res))
            dispatch(hideLoading())
          })
    }
  }