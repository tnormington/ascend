import React, { Component } from 'react';

import { View, Text } from 'react-native';

class Stat extends Component {
    render() {
        return (
            <View style={{
                flex: 0,
                width: '50%',
                marginBottom: 4
            }}>
                <Text style={{
                    color: '#ddd',
                    fontSize: 10
                }}>{this.props.label.toUpperCase()}</Text>
                <Text style={{
                    color: '#fff',
                }}>{this.props.value}</Text>
            </View>
        )
    }
}

export default Stat;