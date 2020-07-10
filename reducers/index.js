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
        [action.deck.id]: action.deck
      }
    case ADD_CARD :
        const deck = state[action.deckId]
        const newDeck = {...deck, cards: [...deck.cards, action.card]}
        return {
            ...state,
            [action.deckId]: newDeck 
        }
    default :
      return state
  }
}

export default decks
