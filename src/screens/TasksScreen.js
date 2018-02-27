/*
 * TasksScreen
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import Tasks from './../components/Tasks';

export default class TasksScreen extends Component<Props>{

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Comprar Leche', completed: false },
        { id: 2, title: 'Sacar la basura', completed: false },
        { id: 3, title: 'Lava los platos', completed: false },
        { id: 4, title: 'Organizar la peda', completed: false },
        { id: 5, title: 'Soportar la cruda', completed: false },
        { id: 6, title: 'Netflix and Chill', completed: false }
      ]
    }

  }


  render(){
    return(
      <View style={styles.container}>

        <TasksHeader toBeCompleted={6}/>

          <View style={styles.tasksContainer}>
            <Tasks tasks = {this.state.tasks}/>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  }
});
