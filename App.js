import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';

// import { Button, StyleSheet, Text, View,  StatusBar ,  TouchableOpacity } from 'react-native';

import {TextInput} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homeawal from './Screen/Homeawal/Homeawal.js'
import Register from './Screen/Register/Register';
import Login from './Screen/Login/Login';
import Menu from './Screen/Dashboard/Menu';
import Laporan from './Screen/Laporan/Laporan';
import Historylaporan from './Screen/HistoryLaporan/HistoryLaporan';
import Mapkejadian from './Screen/Maps/Maps';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      user:null,
      isLoggedIn:false
    
    }
      
      
    
    }
    componentDidMount() {
      auth().onAuthStateChanged((userdata)=>{
          console.log("user" + JSON.stringify(userdata))
          if (userdata ===null){
          this.setState({isLoggedIn:false})
          }else{
           this.setState({user:userdata,isLoggedIn:true})
          }
      });
      // firestore()
      //   .collection('users')
      //   .get()
      //   .then(querySnapshot => {
      //     console.log('Total users: ', querySnapshot.size);
  
      //     querySnapshot.forEach(documentSnapshot => {
      //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      //     });
      //   });
        
        
  
  
    }
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