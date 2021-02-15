import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';

// import { Button, StyleSheet, Text, View,  StatusBar ,  TouchableOpacity } from 'react-native';

import {TextInput} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homeawal from './Screen/Homeawal/Homeawal.js'
import Register from './Screen/Register/Register';
import Login from './Screen/Login/Login';
import Menu from './Menu';
import Laporan from './Laporan';
import Historylaporan from './Historylaporan';
import Mapkejadian from './Mapkejadian';

const Stack = createStackNavigator();

class App extends Component {

      
      
    
    
   
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={Homeawal}  options={{ title: '' }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Laporan" component={Laporan} />
        <Stack.Screen name="Mapkejadian" component={Mapkejadian} />
        <Stack.Screen name="Historylaporan" component={Historylaporan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;