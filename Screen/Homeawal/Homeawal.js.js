import React, { Component } from 'react';
import styles from './style'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



import Geolocation from '@react-native-community/geolocation';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {id:1, title: "Laporan", image:"https://img.icons8.com/color/70/000000/administrator-male.png"},
            {id:2, title: "History", image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
            {id:3, title: "Map", image:"https://img.icons8.com/dusk/70/000000/globe-earth.png"} ,
            {id:4, title: "Signout", image:"https://img.icons8.com/color/70/000000/shutdown.png"} ,
            
          ],
          counter : 1
        };
      }
      
      componentDidMount(){
         
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
    render() {
        return (
            <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')} 
                />
               <TouchableOpacity 
                   onPress={() => this.props.navigation.navigate('Login')}
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                   onPress={() => this.props.navigation.navigate('Register')}
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
                
               
            </KeyboardAwareScrollView>
        </View>
        );
    }
}

export default Login;