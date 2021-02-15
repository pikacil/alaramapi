import React from 'react';
import { StyleSheet, Text, View,  StatusBar ,  TouchableOpacity } from 'react-native';
import Logo from './Logo';
import {TextInput, Button} from 'react-native-paper';
// import firestore from '@react-native-firebase/firestore';
class Login extends React.Component {
  // componentDidMount(){
  //   firestore()
  // .collection('users')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total users: ', querySnapshot.size);

  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //   });
  // });
  // }
  render() {
    return (
      <View >
        <Logo/>
       
        <TextInput placeholder="Email"  />
      
      <TextInput placeholder="Password" />
      
      <Button mode="contained" onPress={() => this.props.navigation.navigate('Menu')} >
       Register
      </Button>
     
      
      </View>
    );
  }
}

// ...
export default Login;