import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    // Button,
    TextInput,
    Image
} from 'react-native';

import TopBar from '../components/TopBar.js';
import Button from '../components/Button.js';
import ButtonSmall from '../components/ButtonSmall.js';


import style from '../styles/style.js';

export default class HomePage extends React.Component {
    static navigationOptions = {
        // title: 'Elevate',
        drawerLabel: 'Home',
        username: null,
        password: null
      };
    render() {
        const { navigate } = this.props.navigation;

        const bgImage = require('../assets/bg/landing.png');
        const logoFull = require('../assets/logo/full.png');

        return (
            <Image
                style={style.container}
                source={ bgImage }>
                <TopBar 
                    navigation={this.props.navigation}
                    style={{
                        alignSelf: 'left'
                    }}/>
                <Image
                    source={ logoFull }
                    style={{
                        // flex: 1,
                        resizeMode: 'center',
                        width: '70%'
                    }}/>
                <TextInput
                    style={style.input}
                    placeholder="Enter a Username or Email"
                    onChangeText={(text) => this.setState({ username: text })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                    style={style.input}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
                <Button
                    style={ style.cta, style.ctaYellow }
                    onPress={() => {
                        alert('login');
                    }}
                    title='Login'
                    color='#FFEA51'
                    />
                <Text style={{
                    marginTop: 30,
                    marginBottom: 10,
                    color: '#92DFFF'
                }}>
                    Don't have an account?
                </Text>
                <ButtonSmall
                    title="Create One"
                    onPress={() => {
                        alert('create account');
                    }}/>
            </Image>
        )
    }
}