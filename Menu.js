import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Menu extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue',flexDirection:'row'}}>
        <View style={{flex: 1, backgroundColor: 'skyblue',justifyContent: 'center',alignItems: 'center'}} ><Text style={{ fontSize: 30 }} onPress={() => this.props.navigation.navigate('Laporan')} >Laporan</Text></View>
        <View style={{flex: 1, backgroundColor: 'steelblue',justifyContent: 'center',alignItems: 'center'}}><Text style={{ fontSize: 30 }}  onPress={() => this.props.navigation.navigate('Historylaporan')} > History</Text><Text style={{ fontSize: 30 }}  onPress={() => this.props.navigation.navigate('Historylaporan')} > Laporan</Text></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'powderblue',flexDirection:'row'}}>
        <View style={{flex: 1, backgroundColor: 'green',justifyContent: 'center',alignItems: 'center'}}><Text style={{ fontSize: 30 }}  onPress={() => this.props.navigation.navigate('Mapkejadian')}>Map</Text><Text style={{ fontSize: 30 }}  onPress={() => this.props.navigation.navigate('Mapkejadian')}>Kejadian</Text></View>
        <View style={{flex: 1, backgroundColor: 'red',justifyContent: 'center',alignItems: 'center'}}><Text style={{ fontSize: 30 }} onPress={() => this.props.navigation.navigate('Home')} >Sign out</Text></View>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      </View>
      
    );
  }
}

// ...
export default Menu;