import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  PermissionsAndroid,
  Platform,
  ToastAndroid
} from 'react-native';
// import Logo from '../../assets/';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import Geolocation from '@react-native-community/geolocation';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ ],
      counter : 1
    };
  }
  
  pushPanicButton = () =>{
  
    if(this.state.counter<3){
     let dummyCounter = this.state.counter;
     this.setState({counter: dummyCounter+1})
    }else{
  
    if (this.hasLocationPermission) {
      
      Geolocation.getCurrentPosition(
        info => {
            const { coords } = info

            console.log( coords.latitude)
            console.log( coords.longitude)
            let uniqueId = Date.now()
            database()
                  .ref('/maps/'+uniqueId)
                  .set({
                    email: 'uniqueId',
                    latitude: coords.latitude,
                    longitude:coords.longitude
                    
                  })
                  .then(() => {
                  
                  
                  Alert.alert("Panic Button",`Dilaporkan kejadian di lokasi  ${coords.latitude} , ${coords.longitude}`)
                  this.setState({counter: 1})
                  });
           
        },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 2000,
            maximumAge: 3600000
        }
    )
    }
      
    }
  
  
  }
  logout = ()=>{
    console.log("SignOut")
      auth()
        .signOut()
        .then(() => {
        console.log('User signed out!')
        this.props.navigation.navigate("Login")
        }).catch((error) => {
          this.props.navigation.navigate("Login")
        
        });
      
    }


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
        <View style={{flex: 2, backgroundColor: 'skyblue',justifyContent: 'center',alignItems: 'center'}} >
          
        <View style={{ flexDirection:'row'}} >
        
      
          <TouchableOpacity onPress={this.pushPanicButton} >
                  <Image style={styles.tinyLogo} source={require('../../assets/logo.png')}/>
                </TouchableOpacity>
          </View>
         
          <Text style={{ fontSize: 30 }} onPress={() => this.props.navigation.navigate('Mapkejadian')}>Klik 3 kali</Text>
          </View>
        
      </View>
      
    );
  }
  hasLocationPermission = async () => {
     
  
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }
  
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
  
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }
  
    return false;
  };
}
const styles = StyleSheet.create({
  
  tinyLogo: {
    width: 90,
    height: 90,
  },
 
});
export default Menu;