import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import style from '../styles/style.js';

const loader = require('../assets/loader/mountain_bounce.gif');

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={ style.cta }
                >
                <Text style={{
                    textAlign: 'center',
                    flex: 0,
                }}>{ this.props.title.toUpperCase() }</Text>
                { this.props.loading && 
                    <Image 
                        style={{
                            width: 24,
                            height: 24,
                            marginLeft: 10,
                        }}
                        source={loader} />
                }
            </TouchableOpacity>
        );
    }
}