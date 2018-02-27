import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';



export default class Tasks extends Component<Props>{

  constructor(props){ //Solamente se puede generar el estado en este constructor
    super(props); //manda a llamar el constructor del padre
  }

  render(){
    return(
      this.props.tasks.map( (task)=>{
        return(
          <TouchableOpacity key={task.id} style={styles.taskContainer}>
            <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
            <Text style={styles.taskText}>{task.title}</Text>
          </TouchableOpacity>
        )
      })
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
  }
});
