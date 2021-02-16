import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
   
    ScrollView,
    FlatList,
    PermissionsAndroid,
    Platform,
    ToastAndroid
} from 'react-native';
import styles from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';

import Geolocation from '@react-native-community/geolocation';
class Laporan extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            nama: "",
            kejadian: "-",
            alamat: "",
            keterangan: ""
        }
    }

    laporkan = () => {
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
                        
                        
                        // Alert.alert("Panic Button",`Dilaporkan kejadian di lokasi  ${coords.latitude} , ${coords.longitude}`)
                            firestore()
                            .collection('Laporan')
                            .doc(this.state.nama+'_'+this.state.kejadian+'_'+this.state.keterangan)
                            .set({
                                nama: this.state.nama,
                                kejadian: this.state.kejadian,
                                alamat: this.state.alamat,
                                keterangan: this.state.keterangan,
                                latitude: coords.latitude,
                                longitude: coords.longitude
                            
                            })
                            .then(() => {
                                this.props.navigation.navigate("Menu")
                                console.log('data added!');
                                Alert.alert("Laporan anda sedang di prosess")
                            }).catch((error) => {
                                Alert.alert("gagal nyimpen", JSON.stringify(error))
                            });
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
                     <TextInput
                        style={styles.input}
                        placeholder='Nama'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(nama) => this.setState({ nama: nama })}

                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                   <View style={{paddingLeft:25}}>
                        <Text style={styles.footerText}>Kejadian</Text>
                    </View>
                    <DropDownPicker
                           items={[
                            
                            {label: '-', value: '-'},
                            {label: 'Pemerkosaan', value: 'Pemerkosaan'},
                            {label: 'Perampokan', value: 'Perampokan'},
                            {label: 'Bencana', value: 'Bencana'},
                            {label: 'Pembunuhan', value: 'Pembunuhan'},
                        ]}
                        defaultValue={this.state.kejadian}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa',paddingLeft:10,marginLeft:25,marginRight:25,paddingBottom:10}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            kejadian: item.value
                        })} 
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Alamat'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(alamat) => this.setState({ alamat: alamat })}

                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                     <View style={{paddingLeft:25}}>
                        <Text style={styles.footerText}>Keterangan</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        placeholder='Keterangan'
                        onChangeText={(keterangan) => this.setState({ keterangan: keterangan })}

                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.laporkan}>
                        <Text style={styles.buttonTitle}>Laporkan</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Already got an account? <Text style={styles.footerLink}>Log in</Text></Text>
                    </View>
                </KeyboardAwareScrollView>
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
export default Laporan;