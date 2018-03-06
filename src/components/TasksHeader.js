import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet
} from 'react-native';



export default class TasksHeader extends Component<Props>{

  constructor(props){ //Solamente se puede generar el estado en este constructor
    super(props); //manda a llamar el constructor del padre
  }

  generateDate(){
    const daysOfTheWeek = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
          months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const currentDate = new Date(),
          day = daysOfTheWeek[currentDate.getDay()],
          month = currentDate.getMonth(),
          year = currentDate.getFullYear(),
          date = currentDate.getDate();

    return `${day} ${date} de ${month} ${year}`.toUpperCase();

  }

  render(){
    return(
      <ImageBackground source={require('./../images/tasks-bg.jpg')} style={styles.container}>
        <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
        <Text style={styles.pendingTasksText}>{this.props.toBeCompleted} Pendientes</Text>
        <Text style={styles.dateText}>{this.props.generateDate}</Text>
      </ImageBackground>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  pendingTasksText: {
    fontSize: 36,
    color: 'white',
    marginTop: 25
  },
  dateText: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 8
  }
});
