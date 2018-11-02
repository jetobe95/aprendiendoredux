import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {createStackNavigator} from 'react-navigation'

//Importando las vistas
import Login from './src/screens/login/'; 
import Register from './src/screens/register/'; 
const Navigator=createStackNavigator({
  Register:Register,
  Login:Login

})

export default class App extends React.Component {
  render() {
    return (
   
     <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
 container:{

 }
});




