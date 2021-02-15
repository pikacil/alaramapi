import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Laporan extends React.Component {
  render() {
    return (
      <View>
        <Text>Laporan</Text>
        
        <Button title="Back to home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

// ...
export default Laporan;