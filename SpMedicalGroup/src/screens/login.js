import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput,ImageBackground,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: ''
        }
    }

    realizarLogin = async () => {
        const resposta = await api.post('/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        const token = resposta.data.token;
        console.warn(token);

        await AsyncStorage.setItem('userToken', token)

        this.props.navigation.navigate('Main');
    }

    limparCampos = () => {
        this.setState({
            email : '',
            senha : ''
        })
    }

    componentWillUnmount(){
        this.limparCampos()
    }

    render(){
        return(
            <ImageBackground
                source={require('../../assets/images/Fundo_login.png')}
                style={StyleSheet.absoluteFillObject}
            >

            <View style={styles.overlay} />
                <View style={styles.main}>

                    <Text style={styles.titleMain}>Entre no sistema!</Text>

                    <TextInput 
                        keyboardType='email-address' 
                        style={styles.inputEmail} 
                        placeholder="Email"
                        placeholderTextColor = 'white'
                        onChangeText={email => this.setState({email})}
                    />

                    <TextInput 
                        style={styles.inputSenha} 
                        placeholder="Senha"
                        secureTextEntry={true}
                        placeholderTextColor = 'white'
                        onChangeText={senha => this.setState({senha})}
                    />
                    
                    <TouchableOpacity 
                        style={styles.btnLogin}
                        onPress={this.realizarLogin}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.56)'
    },

    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleMain: {
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1
    },

    btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 28,
        width: 240,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 2,
        shadowOffset: {height: 1, width: 1},
        backgroundColor: 'white',
        marginTop: 180,
        textTransform: 'Uppercase',
        letterSpacing: 2
    },

    inputEmail: {
        width: 240,
        height: 30,
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
        paddingLeft: 10,
        marginTop: 120,
        color: 'white'
    },

    inputSenha: {
        width: 240,
        height: 30,
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
        paddingLeft: 10,
        marginTop: 50,
        color: 'white'
    }
})