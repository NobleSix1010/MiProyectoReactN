import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';



export default class Tasks extends Component<Props>{

  constructor(props){ //Solamente se puede generar el estado en este constructor
    super(props); //manda a llamar el constructor del padre
  }

  render(){
      const {title,completed,id}=this.props.task;
      const icon = completed ? require('./../images/icon-checked.png') : require('./../images/icon-circle.png');

      return(
        <TouchableHighlight onPress={ ()=>{ this.props.updateTask(id)}} style={styles.container}>
          <View style={styles.taskContainer}>
              <Image style={styles.taskIcon} source={icon}/>
              <Text style={completed ? styles.taskTextCompleted : styles.taskText}>{title}</Text>
          </View>
        </TouchableHighlight>
      )
    }
  }



const styles = StyleSheet.create({
  taskIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  container:{
    height:60
  },
  taskTextCompleted:{
    fontSize:21,
    color: '#A4A4A4'
  }
});
