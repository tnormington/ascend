import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
        };
    }
    static navigationOptions = {
        // title: 'Login',
        drawerLabel: 'Login',
    };
    render() {
        return (
            <View>
                <Text>Login</Text>
                <TextInput
                    style={{height: 40, padding: 10}}
                    placeholder="Username or Email Address"
                    onChangeText={(text) => this.setState({ username: text })}
                    />
                <TextInput
                    style={{height: 40, padding: 10}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    />
            </View>
        )
    }
}