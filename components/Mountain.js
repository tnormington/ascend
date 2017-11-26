import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from '../styles/style.js'

class Mountain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
                borderBottomColor: '#EAEAEA',
                borderBottomWidth: 1,
            }}>
                <View>
                    <Text>{this.props.name}</Text>
                    {/* <Text>{this.props.elevation}</Text> */}
                </View>
                <Text style={{
                    color: '#9B9B9B',
                    fontSize: 13,
                    fontStyle: 'italic'
                }}>{this.props.date}</Text>
            </View>
        )
    }
}

export default Mountain