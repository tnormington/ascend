import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    TouchableOpacity,
    Image
} from 'react-native';

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import style from '../styles/style.js'

export default class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.n = this.props.navigate;
        this.signOut = this._signOut.bind(this)
    }
// 
    _signOut = async () => {
        try {
            await AsyncStorage.removeItem(GC_USER_ID)
            await AsyncStorage.removeItem(GC_AUTH_TOKEN)
        } catch (error) {
            // Error saving data
        } finally {
            alert('signed out');
            this.n('HomePage');
        }
    }

    render() {
        const menu = require('../assets/icon/white/menu.png')

        return (
            <View style={style.topBar}>
                <TouchableOpacity
                    onPress={() => this.n('DrawerOpen')}
                    // style={ style.cta }
                    >
                    <Image
                        source={menu}
                        style={{
                        // ImageAlign: 'center',
                        // flex: 1,
                    }} />
                </TouchableOpacity>
                <Button
                    title="Sign Out"
                    onPress={() => {
                        // alert('sign out')
                        // this.props.signOut()
                        this.signOut();
                        // n('HomePage')
                    }}
                    />
            </View>
        )
    }
}
