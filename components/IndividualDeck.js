import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, navigation } from 'react-navigation';
import { connect } from 'react-redux';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
var _deckTitle

class IndividualDeck extends React.Component {
  render() {


    const { deckTitle } = this.props.navigation.state.params
    const cardsNum = typeof deckTitle === 'undefined' ? 0 : this.props.state[deckTitle].questions.length
    _deckTitle = deckTitle

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text> { deckTitle } </Text>
        <Text> Cards: { cardsNum } </Text>
        <Button
          title="Add Question"
          onPress={() => this.props.navigation.navigate('NewQuestion', {deckTitle: deckTitle})}
        />
        <Button
          title="Take Quiz"
          onPress={() =>  (   clearLocalNotification()
                              .then(setLocalNotification)
                              .then(this.props.navigation.navigate('Quiz', {deckTitle: deckTitle}))
                           )}
        />
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
)(IndividualDeck)