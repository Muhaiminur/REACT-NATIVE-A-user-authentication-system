/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //this is use for simplify java script help
'use strict';

//import from react
import React,{Component} from 'react';
//import for mbl version
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import navigator
import { StackNavigator } from 'react-navigation';
//this is for importing page
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegistrationScreen from './Screens/RegistrationScreen'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

//this is for main app class
export default class App extends React.Component{
  render() {
    return (
      <AppNavigator/>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to LANDING PAGE!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     LOGIN
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}
//for navigation indication
const AppNavigator=StackNavigator({
  HomeScreen:{screen: HomeScreen},
  LoginScreen:{screen :LoginScreen},
  RegistrationScreen:{screen : RegistrationScreen}
 })
//this is coding style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
