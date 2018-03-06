/**
 * AddTasksModal
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';


export default class AddTaskModal extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
          <Image
            style={styles.imgRemind}
            source={require('./../images/remindMe-logo.png')} />
          </View>
          <View style={styles.body}>
          <Text style={styles.lilMessage}>Agregar Tarea</Text>
            <TextInput
              placeholder={'Exportar Assets'}
              placeholderTextColor = 'black'
              onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
              style={styles.input}/>

            <TouchableHighlight style={ styles.btnAgregar } onPress={ ()=>{ this.props.addTask( this.state.taskTitle ) } } >
              <Text style={ styles.txtAgregar } >AGREGAR</Text>
            </TouchableHighlight>

            <TouchableHighlight style={ styles.btnCancelar } onPress={ ()=>{ this.props.hideModal() } }>
              <Text style={ styles.txtCancelar }>CANCELAR</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, .35)'
  },
  header:{
    flex:.4,
    backgroundColor:'red',
    justifyContent: 'space-between',
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body:{
    flex:.6,
    justifyContent: 'space-between',
    padding: 17,
    backgroundColor:'white',
    width: 550
  },
  lilMessage:{
    fontSize:21,
    textAlign:'center',
    color:'gray'
  },
  container: {
    height: 760,
    width: 550,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  input: {
    fontSize: 30,
    textAlign:'center'
  },
  btnAgregar:{
    backgroundColor:'red',
    borderRadius:60,
    height:90,
    width:510,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtAgregar:{
    fontSize: 30,
    color: 'white'
  },
  btnCancelar:{
    borderWidth: 4,
    borderColor:'red',
    borderRadius:60,
    height:90,
    width:510,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCancelar:{
    fontSize: 30,
    color: 'red'
  }
});
//style={ styles.btnAgregar }
