import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import BaseContainer from '../components/BaseContainer'
import TopBar from '../components/TopBar.js';

import style from '../styles/style.js'


class MountainPage extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        drawerLabel: () => null,
    }

    render() {
        console.log(this.props.navigation.state);
        return (
            <BaseContainer>
                <TopBar navigation={this.props.navigation} />
                <View style={style.content}>
                    <Text>Mountain Page</Text>
                    <Text>{this.props.navigation.state.params.rank}</Text>
                </View>
            </BaseContainer>
        )
    }

}

export default MountainPage;