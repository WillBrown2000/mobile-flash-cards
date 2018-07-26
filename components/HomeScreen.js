 import React from 'react'
 import { FontAwesome, Ionicons } from '@expo/vector-icons'
 import { View, Text } from 'react-native'
 import { connect } from 'react-redux'
 import  DeckListItem  from './DeckListItem'
 import { getDecks } from '../utils/api'
 import { receiveDecks } from '../actions/index'


class HomeScreen extends React.Component {

  state = {

    ready: false,

  }

  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
    .then( (decks) => {
    console.log('current async storage: ', decks)
    return dispatch(receiveDecks(decks))
    })
    .then( () => this.setState({ready: true}))

  }

  render() {

    const { deckTitles, navigation, state } = this.props

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Quizes </Text>
        {
          deckTitles.map( (deckTitle, key) => <DeckListItem key={deckTitle} deckTitle={deckTitle} navigation={navigation} cards={state[deckTitle].questions.length} /> )
        }
      </View>
    );
  }
}

function mapStateToProps (state) {

  console.log('current state: ', state)

  return {
    state,
    deckTitles: Object.keys(state),
  }
}

export default connect(
  mapStateToProps
)(HomeScreen)