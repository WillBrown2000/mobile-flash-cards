export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}
export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}