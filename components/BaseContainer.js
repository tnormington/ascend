import React from 'react';
import { Image } from 'react-native';

import style from '../styles/style.js';

export default class BaseContainer extends React.Component {
    render() {
        const bgImage = require('../assets/bg/landing.png');

        return (
            <Image
                style={style.bg}
                source={ bgImage }>
                { this.props.children }
            </Image>
        )
    }
}
