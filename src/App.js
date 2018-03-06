
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskModal from './modals/AddTaskModal';

export default App = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TasksScreen }
  },
  {
    headerMode: 'none'
  }
);


/*
export default class App extends Component<Props> {
  render(){
    return <ScreenStack />;
  }
}
*/
