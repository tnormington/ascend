import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

import MapView from 'react-native-maps';

import data from '../data/Data';

class RecordHike extends Component {
    constructor(props) {
        super(props);

        this.beginRecording = this._beginRecording.bind(this);
        this.setCurrentLocation = this._setCurrentLocation.bind(this);

        this.state = {
            recording: false,
            region: null,
            defaultlatitudeDelta: 0.0922,
            defaultlongitudeDelta: 0.0421,
        };
    }

    componentWillMount() {
        this._setCurrentLocation();
    }

    _setCurrentLocation() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
              this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: this.state.defaultlatitudeDelta,
                    longitudeDelta: this.state.defaultlongitudeDelta
                },
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
                (position) => {
                  this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: this.state.defaultlatitudeDelta,
                        longitudeDelta: this.state.defaultlongitudeDelta
                    },
                    error: null,
                    recording: true,
                  });
                },
                (error) => this.setState({ error: error.message }),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
        } else {
            navigator.geolocation.clearWatch(this.watchId);
            this.setState({ recording: false });
        }
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Record Hike</Text>
                { this.state.region && this.state.region &&
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        zIndex: 1,
                    }}>
                        <MapView
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                // alignItems: 'flex-end',
                                // flex: 1,
                                // justifyContent: 'center'
                                
                            }}
                            region={this.state.region}>
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.region.latitude,
                                    longitude: this.state.region.longitude
                                }}
                                title="You"
                                // description={marker.description}
                                />
                            { data.map(mountain => {
                                // console.log(-Number(mountain.location.lat));
                                return (
                                    <MapView.Marker
                                        coordinate={{
                                            latitude: Number(mountain.location.lat),
                                            longitude: -Number(mountain.location.lon)
                                        }}
                                        key={mountain.rank}
                                        title={mountain.name}
                                        // description={marker.description}
                                        />
                                )
                            })}
                            <Button
                                style={{ zIndex: 10 }}
                                title={this.state.recording ? `STOP` : `START`}
                                onPress={this.beginRecording} />
                        </MapView>
                    </View>
                }    
            </View>
        )
    }
}

export default RecordHike;