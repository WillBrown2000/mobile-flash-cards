 import React from 'react'
 import { Text, View, Button, StyleSheet } from 'react-native'
 import { connect } from 'react-redux'


export default function DeckListItem ({deckTitle, navigation, cards}) {

  return (

    <View style={{justifyContent: 'center'}}>
      <Button
        title={deckTitle}
        onPress={() => navigation.navigate('IndividualDeck', {deckTitle, cards})}
      />
      <Text style={styles.cards}>Cards: {cards} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  cards: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});