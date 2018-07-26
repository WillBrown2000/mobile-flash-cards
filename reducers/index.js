import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      console.log('action', action)
      console.log('state', state)
      return {
        ...state,
        ...action.deck,
      }
    case ADD_QUESTION :
      console.log('action', action)

      const { deck, question, answer } = action.question

      var questions = []
      questions = questions.concat({
        question: question,
        answer: answer,
      })

      var newStateObject = {}

      newStateObject = {

          [deck]: {

            ...state[deck],
            questions : [...state[deck].questions,
                         questions
                        ]

          }

      }

      console.log('newStateObject', newStateObject)
      console.log('newStateObject[deck]', newStateObject[deck])

      return {
        ...state,


          [deck] : {
            ...state[deck],
            questions: [...state[deck].questions.concat(questions),
                       ]
                   }

        ,
      }

    default :
      return state
  }
}

export default entries