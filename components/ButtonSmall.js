import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import style from '../styles/style.js';

export default class ButtonSmall extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this._onPressButton}
                style={ style.ctaSmall }
                >
                <Text style={{
                    textAlign: 'center',
                    color: '#92DFFF'
                }}>{ this.props.title.toUpperCase() }</Text>
            </TouchableOpacity>
        );
    }
}