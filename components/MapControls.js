import React from 'react';

import { View, Text } from 'react-native';

import Button from './Button'

class MapControls extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: '#00326C',
                padding: 8,
                flex: 0,
                width: '100%',
            }}>
                <Button
                    style={{ zIndex: 10 }}
                    title={this.props.recording ? `STOP` : `START`}
                    subTitle="MOUNT ELBERT"
                    onPress={this.props.beginRecording} />
            </View>
        )
    }
}

export default MapControls;