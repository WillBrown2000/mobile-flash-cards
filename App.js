import React from 'react'
import { View, Text, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import reducer from './reducers'
import HomeScreen from './components/HomeScreen'
import CreateNewDeck from './components/CreateNewDeck'
import CreateNewQuestion from './components/NewQuestion'
import IndividualDeck from './components/IndividualDeck'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'

const BottomTabs = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  CreateDeck: { screen: CreateNewDeck,
                navigationOptions: ({ navigation }) => ({
                    title: `Create Deck`,
                }),
              },
});

const MainNavigator = createStackNavigator(
  {
    Home: BottomTabs,
    IndividualDeck: IndividualDeck,
    NewQuestion: CreateNewQuestion,
    Quiz: Quiz,
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}