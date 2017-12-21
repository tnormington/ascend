import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class MountainCallout extends Component {
    constructor(props) {
        super(props)
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const mnt = this.props.mountain;

        return (
            <MapView.Callout
                tooltip={true}
                style={{
                    padding: 6,
                    borderRadius: 4,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                onPress={ () => this.props.navigation.navigate('Mountain', { rank: mnt.rank }) }>
                <Text style={{
                    color: '#fff',
                    fontSize: 18,
                    marginBottom: 4,
                    textAlign: 'center',
                }}>{mnt.name}</Text>
                <Text style={style.markerText}>{mnt.range}</Text>
                <Text style={style.markerText}>{this.numberWithCommas(mnt.elevation.feet)} {this.props.measurement}</Text>
                <Text
                    style={{
                        color: '#92DFFF',
                        textAlign: 'center',
                        fontSize: 10
                    }}>
                    MORE
                </Text>
            </MapView.Callout>
        )
    }
}

const style = StyleSheet.create({
    markerText: {
        color: '#fff',
        textAlign: 'center',
    }
});



export default MountainCallout;