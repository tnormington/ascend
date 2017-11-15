import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import style from '../styles/style.js';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this._onPressButton}
                style={ style.cta }
                >
                <Text style={{
                    textAlign: 'center',
                    flex: 1,
                }}>{ this.props.title.toUpperCase() }</Text>
            </TouchableOpacity>
        );
    }
}