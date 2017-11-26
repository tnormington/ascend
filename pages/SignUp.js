import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';

import BaseContainer from '../components/BaseContainer'
import Button from '../components/Button'
import ButtonSmall from '../components/ButtonSmall'

// import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'



import style from '../styles/style.js';

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
        };
    }
    static navigationOptions = {
        // title: 'Sign Up',
        drawerLabel: 'Sign Up',
    }

    _createAccount = async () => {

    }

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }

    render() {
        const bgImage = require('../assets/bg/landing.png');
        const logoFull = require('../assets/logo/full.png');

        const { navigate } = this.props.navigation;

        return (
            <BaseContainer>
                <Image
                    source={ logoFull }
                    style={{
                        // flex: 1,
                        resizeMode: 'center',
                        width: '70%',
                        marginBottom: 20,
                        marginTop: 20
                    }}/>
                <TextInput
                    style={ style.input }
                    placeholder="Username or Email Address"
                    onChangeText={(text) => this.setState({ username: text })}
                    />
                <TextInput
                    style={ style.input }
                    placeholder="Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    />
                <Button
                    onPress={() => this._createAccount() }
                    title="Sign Up"
                    />
                <Text
                    style={{
                    marginTop: 30,
                    marginBottom: 10,
                    color: '#92DFFF'
                    }}>
                    Already have an account?
                </Text>
                <ButtonSmall
                    title="Sign In"
                    onPress={() => navigate('Home')}/>
            </BaseContainer>
        )
    }
}