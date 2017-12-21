import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Stat from './Stat'

class MapStats extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pos = this.props.userPosition;
        // console.log(pos);
        return (
            <View style={{
                flex: 0,
                width: '100%',
                padding: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                flexWrap: 'wrap',
                alignContent: 'space-between',
                flexDirection: 'row'
            }}>
                <Stat label="Altitude" value={pos.altitude*3.28084} />
                <Stat label="Speed" value={pos.speed} />
            </View>
        )
    }
}

export default MapStats;