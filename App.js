import React, { Component , useEffect} from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'
import SplashScreen from 'react-native-splash-screen';


  SplashScreen.hide();


class App extends Component {

  render() {
    return (
        <Routes />
    )
  }
}
export default App
AppRegistry.registerComponent('App', () => App);
