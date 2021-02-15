import React from 'react';
import { StyleSheet, Text, View,  StatusBar ,  TouchableOpacity } from 'react-native';
import Logo from './Logo';
import {TextInput, Button} from 'react-native-paper';
class Register extends React.Component {
  render() {
    return (
      <View >
        <Logo/>
        <TextInput placeholder="Nama" />
        <TextInput placeholder="Email"  />
        <TextInput placeholder="Phone"  />
      <TextInput placeholder="Password" />
        <TextInput placeholder="Adress" />
      <Button mode="contained" onPress={() => this.props.navigation.navigate('Menu')} >
       Register
      </Button>
     
      
      </View>
    );
  }
}

// ...
export default Register;