import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Picker
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import TotalElevation from './TotalElevation'

import style from '../styles/style.js'

const options = [
    'Sight Seeker',
    'Rock Climber',
    'Hill Enthusiast',
    'Wanderer',
    'Soul Searcher',
    'Explorer',
    'Hitch Hiker',
    'Backpacker',
    'Rambler'
]

class NamePlate extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const portrait = require('../assets/portrait.png')

        return (
            <View style={{
                // flex: 1,
                flexDirection: 'row',
                marginBottom: 8
            }}>
                <View style={{ marginRight: 8 }}>
                    <Image source={portrait} />
                    <Text style={style.level}>{this.props.level}</Text>
                </View>
                <View>
                    <TextInput
                        editable={this.props.edit}
                        value={this.props.username}
                        placeholder="Username"
                        onChangeText={this.props.handleNameChange}
                        style={{ 
                            marginBottom: 4,
                            // flex: 1
                         }} />
                    { this.props.edit &&
                        <ModalDropdown
                            defaultValue={this.props.title}
                            onSelect={this.props.handleTitleChange}
                            options={options} />
                    }
                    { !this.props.edit && 
                        <View>
                            <Text style={{ marginBottom: 6 }}>{this.props.title}</Text>
                            <TotalElevation
                                measurement={this.props.measurement}
                                totalElevation='12450' />
                        </View>
                    }
                </View>
            </View>
        )
    }
}

export default NamePlate