import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Picker,
//   ImagePickerIOS
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-picker';

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

        this.handleImageUpload = this._handleImageUpload.bind(this);
        this.state = {
            // username: this.props.username,
            // title: this.props.title
        }
    }

    _handleImageUpload = () => {
        const imagePickerOptions = {
            title: 'Select Avatar',
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source
              });
            }
        });
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
                { this.props.edit &&
                    <Text onPress={this.handleImageUpload}>Upload</Text>
                }
                { !this.props.edit && this.state.avatarSource &&
                    <Image source={this.state.avatarSource} />
                }
                <Text style={style.level}>{this.props.level}</Text>
                </View>
                <View>
                    <TextInput
                        editable={this.props.edit}
                        value={this.props.username}
                        placeholder="Username"
                        onChangeText={(value) => {
                            this.props.handleNameChange(value)
                        }}
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
                                totalElevation={this.props.totalElevation} />
                        </View>
                    }
                </View>
            </View>
        )
    }
}

export default NamePlate