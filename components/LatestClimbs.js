import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from '../styles/style.js'

import Mountain from './Mountain'

class LatestClimbs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const m = this.props.measurement

        return (
            <View>
                <Text style={style.header}>LATEST CLIMBS</Text>
                { this.props.climbs.map(climb => {
                    return (
                        <Mountain
                            key={climb.name}
                            elevation={climb.elevation[m]}
                            name={climb.name}
                            date={climb.dateClimbed}
                            />
                    )
                })}
            </View>
        )
    }
}

export default LatestClimbs