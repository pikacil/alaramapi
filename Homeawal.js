import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Homeawal extends React.Component {
  render() {
    return (
      <View>
       
       <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
        <Button title="Register" onPress={() => this.props.navigation.navigate('Register')} />
      </View>
    );
  }
}

// ...
export default Homeawal;