import React, { Component } from 'react';
import styles from './style'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import auth from '@react-native-firebase/auth';

class Login extends Component {

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