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

export function addDeck (title) {
    return {
      type: ADD_DECK,
      title,
    }
  }

export function addCard (title, card) {
  return {
    type: ADD_CARD,
    title,
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
          (decks) => {
            dispatch(receiveDecks(decks))
            dispatch(hideLoading())
          })
    }
  }