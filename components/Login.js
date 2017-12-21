import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';

import BaseContainer from '../components/BaseContainer'
import Button from '../components/Button'
import ButtonSmall from '../components/ButtonSmall'

import style from '../styles/style'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: true,
        }
    }

    render() {
        const logoFull = require('../assets/logo/full.png');

        return (
            <View style={{ 
                flex: 1,
                // width: '100%',
                alignItems: 'center',
                marginLeft: 10,
                marginRight: 10
             }}>
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
                    style={style.input}
                    placeholder={ this.state.login ? `Enter an Email Address` : `Enter an Email Address` }
                    onChangeText={this.props.handleEmail}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCapitalize='none'
                    />
                <TextInput
                    style={style.input}
                    placeholder="Password"
                    onChangeText={this.props.handlePassword}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    />
                { !this.state.login &&
                    <TextInput
                        style={style.input}
                        placeholder="Confirm Password"
                        onChangeText={this.props.handlePassword2}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        />
                }
                <Button
                    style={ style.cta, style.ctaYellow }
                    onPress={this.props.confirm}
                    title={ this.state.login ? `Login` : `Sign Up`}
                    color='#FFEA51'
                    loading={this.props.loginBtnLoading}
                    />
                <Text style={{
                    marginTop: 30,
                    marginBottom: 10,
                    color: '#92DFFF'
                }}>
                    { this.state.login ? `Don't have an account?` : `Already have an account?` }
                </Text>
                <ButtonSmall
                    title={ this.state.login ? `Create One` : `Log In` }
                    onPress={() => {
                        this.setState({
                            login: !this.state.login
                        });
                    }}/>
            </View>
        )
    }
}

export default Login;