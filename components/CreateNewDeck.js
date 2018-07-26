 import React, { Component } from 'react'
 import { FontAwesome, Ionicons } from '@expo/vector-icons'
 import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
 import { connect } from 'react-redux'
 import { addDeck } from '../actions/index.js'
 import { createStackNavigator, navigation } from 'react-navigation'
 import { saveDeckTitle } from '../utils/api'


export class CreateNewDeck extends Component {
  state = {
    question: 'sample question',
  }

  onSubmit = (title) => {

    this.props.dispatch(addDeck({
      [title]: {
        'title': title,
        'questions': []
        }
    }))

    saveDeckTitle(title).then( () => this.props.navigation.navigate('IndividualDeck', {deckTitle: title, cards: 0}))
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What is the title of your new deck?</Text>
          <TextInput
            style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            onSubmitEditing={(event) => this.onSubmit(event.nativeEvent.text)}
          />
          <TouchableOpacity
             style={styles.submitButton}
             onPress={
                () => this.onSubmit(this.state.title)
             }>
             <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
      </View>
    );
  }
}


 const styles = StyleSheet.create({
     container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
  })

  function mapStateToProps (state) {

    return {
    state,
    }
  }

  export default connect(
    mapStateToProps
  )(CreateNewDeck)