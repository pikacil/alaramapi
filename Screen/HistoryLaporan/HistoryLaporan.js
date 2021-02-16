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

import { Card, Button, Title, Paragraph, Avatar, IconButton } from 'react-native-paper';
import styles from './style';
import firestore from '@react-native-firebase/firestore';

class HistoryLaporan extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          namanya:[]
        }}
        getAPI = () => {
          const list_data = []
          firestore()
        .collection('Laporan')
        
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              const { nama } = documentSnapshot.data();
              const { alamat } = documentSnapshot.data();
              const { latitude } = documentSnapshot.data();
              const { longitude } = documentSnapshot.data();
              list_data.push(nama,alamat,latitude,longitude);
             
          });
            this.setState({
        data: list_data
        });
        });
        }
    componentDidMount(){
       this.getAPI();
       console.log(this.getAPI());
           
    }
    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.footerView}>
                    {this.state.data.map((data) => {
              return (
                <ScrollView>
             
              <Text>{data}</Text>
            </ScrollView>
              )
            })}
                    </View>
            </View>
        );
    }
}

export default HistoryLaporan;