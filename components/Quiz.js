 import React from 'react'
 import { FontAwesome, Ionicons } from '@expo/vector-icons'
 import { View, Text, Button } from 'react-native'
 import { connect } from 'react-redux'
 import  DeckListItem  from './DeckListItem'
 import { navigation } from 'react-navigation';


class Quiz extends React.Component {

  state = {

    correct: 0,
    incorrect: 0,
    showAnswer: false,
    questionNumber: 0,

  }

  incrementCorrect = (correct, questionNumber, numOfQuestions) => {


  this.setState({correct: ++correct, questionNumber: ++questionNumber })
  }
  incrementIncorrect = (incorrect, questionNumber, numOfQuestions) => {

  this.setState({incorrect: ++incorrect, questionNumber: ++questionNumber })
  }

  toggleAnswer = () => {

  this.setState({showAnswer: !this.state.showAnswer})

  }

  render() {

    const { deckTitle } = this.props.navigation.state.params
    const { state } = this.props
    const { incorrect, correct } = this.state
    const deck = state[deckTitle]
    const numOfQuestions = deck.questions.length
    const questionNumber = this.state.questionNumber >= deck.questions.length ? deck.questions.length - 1 : this.state.questionNumber
    const isQuizOver = this.state.questionNumber > deck.questions.length - 1 ? true : false

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!this.state.showAnswer && <Text>{deck.questions[questionNumber].question}</Text>}
        {this.state.showAnswer && <Text>{deck.questions[questionNumber].answer}</Text>}

        <Button
          title={this.state.showAnswer ? 'Show Question' : 'Show Answer'}
          onPress={() => this.toggleAnswer()}
        />
        <Button
          title='Correct'
          onPress={() => this.incrementCorrect(correct, questionNumber, numOfQuestions)}
          disabled={isQuizOver}
        />
        <Button
          title='Incorrect'
          onPress={() => this.incrementIncorrect(incorrect, questionNumber, numOfQuestions)}
          disabled={isQuizOver}
        />
         disabled={questionNumber + 1 >= numOfQuestions}
        <Text> Question: {questionNumber +1 } of {numOfQuestions} </Text>
        { isQuizOver &&

         <Button
          title='Restart Quiz'
          onPress={() => this.setState( {
                                          incorrect: 0,
                                          questionNumber: 0,
                                          correct: 0,
                                          showAnswer: false,
                                        }
                                       )}
        />
        }
        { isQuizOver &&

        <Button
          title='Back to Deck'
          onPress={() => this.props.navigation.navigate('IndividualDeck', {deckTitle: deckTitle})}
        />
        }
        { isQuizOver &&

        <Text>You answered {correct} correct out of {numOfQuestions} questions total</Text>
        }
      </View>
    );
  }
}

function mapStateToProps (state) {

  return {
    state,
  }
}

export default connect(
  mapStateToProps
)(Quiz)