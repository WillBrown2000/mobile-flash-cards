 import React, { Component } from 'react'
 import { FontAwesome, Ionicons } from '@expo/vector-icons'
 import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
 import { connect } from 'react-redux'
 import { addQuestion } from '../actions/index.js'
 import { navigation } from 'react-navigation'
 import { addCardToDeck } from '../utils/api'


export class CreateNewQuestion extends Component {
  state = {
    title: 'sample title',
    question: 'sample question',
    answer: 'sample answer',
  }

  onSubmit = ({deckTitle, question, answer}) => {

  card =  {
             question: question,
             answer: answer,
          }

    this.props.dispatch(addQuestion(

       {
          deck: deckTitle,
          question: question,
          answer: answer,
       }
    ))

    addCardToDeck(deckTitle, card).then( () => this.setState({answer: '', title: '', question: ''}) )

  }


  render() {

    const { deckTitle } = this.props.navigation.state.params

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add a question:</Text>
          <TextInput
            style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
          <TextInput
            style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
          <TouchableOpacity
             style={styles.submitButton}
             onPress={
                () => this.onSubmit({question: this.state.question,
                                     answer: this.state.answer,
                                     deckTitle: deckTitle,
                                    })
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
  )(CreateNewQuestion)