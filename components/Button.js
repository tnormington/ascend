import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import style from '../styles/style.js';

const loader = require('../assets/loader/mountain_bounce.gif');

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={ style.cta }
                >
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        // textAlign: 'center',
                        flex: 0,
                        // flexDirection: 'column',
                    }}>{ this.props.title.toUpperCase() }
                    </Text>
                    { this.props.subTitle &&
                        <Text
                            style={{
                                flex: 0,
                                fontSize: 10
                            }}>
                        {this.props.subTitle}
                        </Text>
                    }
                </View>
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