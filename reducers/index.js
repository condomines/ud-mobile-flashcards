import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        [action.title]: {title: action.title, cards: []}
      }
    case ADD_CARD :
        const deck = state[action.title]
        const newDeck = {...deck, cards: [...deck.cards, action.card]}
        return {
            ...state,
            [action.title]: newDeck 
        }
    default :
      return state
  }
}

export default decks
