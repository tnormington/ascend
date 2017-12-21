import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  AsyncStorage,
  TextInput

} from 'react-native';


// import { graphql, gql, compose } from 'react-apollo';
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import BaseContainer from '../components/BaseContainer'
import TopBar from '../components/TopBar'
import NamePlate from '../components/NamePlate'
import LatestClimbs from '../components/LatestClimbs'
import ButtonCog from '../components/ButtonCog'

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import style from '../styles/style.js'

const climbs = [
    {
        name: 'Mount Elbert',
        elevation: {
            ft: 14440,
            meters: 4401.312
        },
        dateClimbed: '10/12/2017'
    },
    {
        name: 'Mount Atlas',
        elevation: {
            ft: 15570,
            meters: 4931
        },
        dateClimbed: '06/05/2017'
    },
    {
        name: 'Mount Shepard',
        elevation: {
            ft: 14093,
            meters: 4019
        },
        dateClimbed: '01/17/2017'
    }
]

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.handleTitleChange = this._handleTitleChange.bind(this)
        this.handleNameChange = this._handleNameChange.bind(this)
        this.handleProfileSave = this._handleProfileSave.bind(this)
        this.getProfileData = this._getProfileData.bind(this)

        this.handleEditToggle = this._handleEditToggle.bind(this);

        this.state = {
            profile: this.props.profile,
            username: null,
            title: null,
            edit: false,
            measurement: 'ft',
            level: 13
        }
    }

    _handleEditToggle() {
        // if(this.state.edit)
        // alert('toggle!');
        this.setState({
            edit: !this.state.edit
        })
    }

    _handleTitleChange(i, value) {
        this.setState({title: value})
    }

    _handleNameChange(value) {
        console.log(`changing name in profile state: ${value}`);
        this.setState({username: value})
    }

    _handleProfileSave = async () => {
        const { username, title } = this.state
        // const id = await AsyncStorage.getItem(GC_USER_ID)
        // console.log(this.props.updateUserMutation);
        const result = await this.props.updateUserMutation({
            variables: {
                id: this.props.id,
                username,
                title
            }
        })

        console.log(result);


    }

    _getProfileData = async () => {
        // const result = await this.props.userQuery;
        // console.log(`result.username: ${result.username}`);
        // // this.setState({
        // //     username: result.username
        // // })
    }

    render() {
        if(this.props.userQuery.loading) {
            return (
                <Text>Loading...</Text>
            )
        }


        const user = this.props.userQuery.User;

        // console.log(user);

        return (
            <View style={{ flex: 1, width: '100%' }}>
                <TopBar navigation={this.props.navigation} signOut={this.props.signOut} />
                <View style={style.content}>
                    <ButtonCog
                        edit={this.state.edit}
                        onPress={ this.handleEditToggle } />
                    <NamePlate
                        edit={this.state.edit}
                        title={this.state.title != null ? this.state.title : user.title}
                        handleNameChange={this.handleNameChange}
                        handleTitleChange={this.handleTitleChange}
                        measurement={this.state.measurement}
                        username={ this.state.username != null ? this.state.username : user.username }
                        user={user}
                        totalElevation={user.totalElevation ? user.totalElevation : 0 }
                        level={this.state.level} />
                    <LatestClimbs
                        climbs={climbs}
                        measurement={this.state.measurement} />
                </View>
            </View>
        )
    }
}

export const UPDATE_USER_MUTATION = gql`
mutation updateUserMutation(
    $id: ID!,
    $username: String,
    $title: String,
    $totalElevation: Int
) {
  updateUser(
    id: $id,
    username: $username,
    title: $title,
    totalElevation: $totalElevation
  ) {
    id
    username
    title
    totalElevation
  }
}
`

export const USER_QUERY = gql`
query userQuery($id: ID!) {
  User(
    id: $id
  ) {
    id
    username
    title
    totalElevation
    email
  }
}
`

const mapStateToProps = (state) => {
    return {
        profile: {
            username: state.username,
            title: state.title,
            totalElevation: state.totalElevation
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => {
            dispatch({
                type: 'UPDATE_PROFILE',
                profile
            });
        }
    };  
};


// 3
export default compose(
    graphql(USER_QUERY, { name: 'userQuery' }),
    graphql(UPDATE_USER_MUTATION, { name: 'updateUserMutation' })
)(Profile)
