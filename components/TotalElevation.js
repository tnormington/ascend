import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import style from '../styles/style.js'

class TotalElevation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const mountain = require('../assets/icon/black/mountain.png')

        return (
            <View style={{
                flexWrap: 'wrap', 
                alignItems: 'flex-start',
                flexDirection:'column',
            }}>
                <View style={style.totalElevation}>
                    <Image 
                        style={style.icon}
                        source={mountain} />
                    <Text style={{
                        fontSize: 12
                    }}>{this.props.totalElevation} {this.props.measurement.toUpperCase()} CLIMBED</Text>
                </View>
            </View>
        )
    }
}

export default TotalElevation