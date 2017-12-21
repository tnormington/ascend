import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import TopBar from '../components/TopBar.js';
import MountainCallout from '../components/MountainCallout';
import MapControls from '../components/MapControls';
import MapStats from '../components/MapStats';

import data from '../data/Data';

import mapStyle from '../styles/mapStyle'

import { UPDATE_USER_MUTATION } from '../components/Profile'


class RecordHike extends Component {
    constructor(props) {
        super(props);

        this.beginRecording = this._beginRecording.bind(this);
        this.setCurrentLocation = this._setCurrentLocation.bind(this);
        this.handleMapPress = this._handleMapPress.bind(this);
        this.handleRegionChange = this._handleRegionChange.bind(this);
        this.updateUserData = this._updateUserData.bind(this);

        this.state = {
            recording: false,
            region: null,
            userPosition: null,
            defaultlatitudeDelta: 0.0952,
            defaultlongitudeDelta: 0.0461,
            selected: null,
            measurement: 'FT',
            path: [],
        };
    }

    static navigationOptions = {
        drawerLabel: 'Record A Hike',
    }

    componentWillMount() {
        this._setCurrentLocation();
    }

    _handleMapPress(e) {
        console.log('clicked');
        console.log(e);
    }

    _setCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
              this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: this.state.region ? this.state.region.latitudeDelta : this.state.defaultlatitudeDelta,
                    longitudeDelta: this.state.region ? this.state.region.longitudeDelta : this.state.defaultlongitudeDelta
                },
                userPosition: { ...position.coords },
                error: null,
              });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    _beginRecording = async () => {
        if(!this.state.recording) {
            this.watchId = navigator.geolocation.watchPosition(
                (position) => this._updatePosition(position),
                (error) => this.setState({ error: error.message }),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        } else {
            navigator.geolocation.clearWatch(this.watchId);
            this.setState({ recording: false });
        }
    }

    _updatePosition(position) {
        this.setState({
            userPosition: { ...position.coords },
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: this.state.region.latitudeDelta ? this.state.region.latitudeDelta : this.state.defaultlatitudeDelta,
                longitudeDelta: this.state.region.longitudeDelta ? this.state.region.longitudeDelta : this.state.defaultlongitudeDelta
            },
            error: null,
            recording: true,
          });
        this._updatePath(position);
    }

    _updatePath(position) {
        // Create a copy of the old path to add to it, since we can't modify the one in state
        let path = [...this.state.path];

        path.push({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });

        this.setState({
            path
        });
    }

    _handleRegionChange(region) {
        console.log(region);
        this.setState({ region });
    }

    _updateUserData = async () => {
        const { altitude } = this.state.userPosition;

        const result = await this.props.updateUserMutation({
            variables: {
                id,
                altitude
            }
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        const mountainUntouched = require('../assets/icon/white/mountainUntouched.png');
        return (
            <View style={{
                flex: 1,
            }}>
                { this.state.region &&
                    <View style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flexDirection: 'column',
                        flex: 1,
                        zIndex: 1,
                    }}>
                        <TopBar navigation={this.props.navigation} />
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            customMapStyle={mapStyle}
                            onRegionChange={this.handleRegionChange}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                flex: 1,
                            }}
                            region={this.state.region}>
                            { this.state.userPosition &&
                                <MapView.Marker
                                    title="You"
                                    coordinate={{
                                        latitude: this.state.userPosition.latitude,
                                        longitude: this.state.userPosition.longitude
                                    }} />
                            }
                            { data.map(mountain => {
                                // console.log(`mountain rank: ${mountain.rank}`);
                                return (
                                    <MapView.Marker
                                        coordinate={{
                                            latitude: mountain.location.lat,
                                            longitude: mountain.location.lon
                                        }}
                                        key={mountain.rank}
                                        image={mountainUntouched}
                                        >
                                        <MountainCallout
                                            navigation={this.props.navigation}
                                            mountain={mountain}
                                            measurement={this.state.measurement} />
                                    </MapView.Marker>
                                )
                            })}
                            { this.state.path.length > 0 && 
                                <MapView.Polyline
                                    strokeColor='#FFF253'
                                    strokeWidth={3}
                                    coordinates={this.state.path} />
                            }
                        </MapView>
                        <MapStats userPosition={this.state.userPosition} />
                        <MapControls 
                            beginRecording={this.beginRecording}
                            recording={this.state.recording} />
                    </View>
                }    
            </View>
        )
    }
}

// export default RecordHike;

export default graphql(UPDATE_USER_MUTATION, { name: 'updateUserMutation'}) (RecordHike)