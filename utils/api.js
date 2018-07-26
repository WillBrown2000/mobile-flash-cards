import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'DECK'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then( (decks) =>  JSON.parse(decks) )
}
export function getDeck(id) {}
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}
export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      questions: [card]
    }
  }))

}

//export function fetchCalendarResults () {
//  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//    .then(formatCalendarResults)
//}
//
//export function removeEntry (key) {
//  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//    .then((results) => {
//      const data = JSON.parse(results)
//      data[key] = undefined
//      delete data[key]
//      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//    })
//}