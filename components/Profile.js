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


import { graphql, gql, compose } from 'react-apollo';

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

        this.state = {
            username: 'Tim Normington',
            title: 'Sight Seeker',
            edit: false,
            measurement: 'ft',
            level: 13
        }
    }

    componentWillMount() {
        // AsyncStorage.getItem(GC_USER_ID)
        //     .then((id) => {
        //         console.log(id);
        //         // this.props.userQuery(id)
        //         //     .then((data) => {
        //         //         const { id, username, title } = data.User;
        //         //         this.setState({
        //         //             id,
        //         //             username,
        //         //             title
        //         //         })
        //         //     })
        //     })
    }

    _handleTitleChange(i, value) {
        this.setState({title: value})
    }

    _handleNameChange(value) {
        this.setState({username: value})
    }

    _handleProfileSave = async () => {
        const { username, title } = this.state
        const id = await AsyncStorage.getItem(GC_USER_ID)

        const result = await this.props.updateUserMutation({
            variables: {
                id,
                username,
                title
            }
        })
    }

    render() {
        

        return (
            <View style={{ flex: 1, width: '100%' }}>
                <TopBar
                    navigate={this.props.navigate}
                    signOut={this.props.signOut}
                    />
                <View style={style.content}>
                    <ButtonCog
                        edit={this.state.edit}
                        onPress={() => {
                            if(this.state.edit) {
                                this.handleProfileSave();   
                            }
                            this.setState({
                                edit: !this.state.edit
                            })
                        }} />
                    <NamePlate
                        edit={this.state.edit}
                        title={this.state.title}
                        handleNameChange={this.handleNameChange}
                        handleTitleChange={this.handleTitleChange}
                        measurement={this.state.measurement}
                        username={this.state.username}
                        level={this.state.level} />
                    <LatestClimbs
                        climbs={climbs}
                        measurement={this.state.measurement} />
                </View>
            </View>
        )
    }
}


const UPDATE_USER_MUTATION = gql`
mutation updateUserMutation(
    $id: ID!,
    $username: String!,
    $title: String!
) {
  updateUser(
    id: $id,
    username: $username,
    title: $title
  ) {
    id
    username
    title
  }
}
`

const USER_QUERY = gql`
query userQuery($id: ID!) {
  User(
    id: $id
  ) {
    id
    username
    title
  }
}
`

// 3
export default compose(
    graphql(USER_QUERY, { name: 'userQuery' }),
    graphql(UPDATE_USER_MUTATION, { name: 'updateUserMutation' })
)(Profile)
