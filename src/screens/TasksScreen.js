/*
 * TasksScreen
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Modal
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import Tasks from './../components/Tasks';
import AddTaskModal from './../modals/AddTaskModal';

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
      ],
      showModal:false
    }

  }

  showModal(){
    this.setState( {showModal: true});
  }

  hideModal(){
    this.setState( {showModal: false});
  }

  addTask(title){
    //const newTask= {id:id,title:title,completed:false};
    const id = 100+ this.state.tasks.length;
    const newTask ={id, title, completed:false};
    let tasks = [...this.state.tasks];
    tasks.push(newTask);

    this.setState( {tasks} );
    this.hideModal();


  }


  calculateTaskToBeCompleted(){
    let count = 0;
    this.state.tasks.forEach(task =>{
      if(!task.completed){
        count++;
      }
    });
    return count;
  }

  updateTask(targetedId){
    let currentTasks = [...this.state.tasks];

    let taskToBeUpdated = currentTasks.find( (task) => task.id === targetedId);

    taskToBeUpdated.completed = !taskToBeUpdated.completed;

    this.setState( {tasks: currentTasks} ); //Se necesita pasar un objeto
  }

  renderTasks(){
    return(
      this.state.tasks.map( (task)=> {
        return(
          <Tasks key={task.id} task={task} updateTask={this.updateTask.bind(this)}/>
        )
      })
    )
  }




  render(){
    /*return(
      <View style={styles.container}>
        <TasksHeader toBeCompleted={6}/> <Tasks
          <ScrollView style={styles.tasksContainer}> { this.renderTasks() };  </ScrollView>
      </View>
    )*/
    return (
      <View style={ styles.container }>
        <TasksHeader toBeCompleted={this.calculateTaskToBeCompleted()}/>
        <ScrollView style={ styles.tasksContainer }>{this.renderTasks()}</ScrollView>
        <TouchableHighlight style={styles.addTaskbutton} onPress ={()=>{this.showModal()}}>
          <Image style={styles.plusIcon} source={require('./../images/icon-plus.png')}/>
        </TouchableHighlight>
        <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={()=>{this.hideModal()}}
        visible={this.state.showModal}>
          <AddTaskModal
            addTask={this.addTask.bind(this)}
            hideModal={this.hideModal.bind(this)}/>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  addTaskbutton:{
    backgroundColor: '#ED184A',
    width:66,
    height:66,
    borderRadius:33,
    position: 'absolute',
    bottom:20,
    right:15,
    alignItems:'center',
    justifyContent:'center'
  },
  plusIcon:{
    width:30,
    height:30
  }
});
