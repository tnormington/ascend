import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import style from '../styles/style.js';

export default class ButtonCog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const path = `../assets/icon/${this.props.iconColor}/${this.props.iconName}.png`;
        // const path = `../assets/icon/gray/cog@1x.png`;
        const cog = require('../assets/icon/gray/cog.png');
        const save = require('../assets/icon/blue/save.png');
        // const icon = require(path);

        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={ style.buttonIcon }
                >
                { !this.props.edit &&
                    <Image 
                        source={cog}
                        style={{
                            alignSelf: 'flex-end',
                            resizeMode: 'center',
                            width: 24,
                            height: 24,
                        }} />
                }
                { this.props.edit &&
                    <Image 
                        source={save}
                        style={{
                            // flex: 1,
                            alignSelf: 'flex-end',
                            resizeMode: 'center',
                            width: 24,
                            height: 24,
                            // width: '70%',
                            // marginBottom: 20,
                            // marginTop: 20
                        }} />
                }
            </TouchableOpacity>
        );
    }
}