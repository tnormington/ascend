import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

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
    };
    render() {
        return (
            <View>
                <Text style={{textAlign: 'center'}}>Sign Up</Text>
                <TextInput
                    style={{ padding: 10}}
                    placeholder="Username or Email Address"
                    onChangeText={(text) => this.setState({ username: text })}
                    />
                <TextInput
                    style={{ padding: 10}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({ password: text })}
                    />
                <Button
                    onPress={() => {
                        alert('Submit!');
                    }}
                    title="Submit"
                    />
            </View>
        )
    }
}