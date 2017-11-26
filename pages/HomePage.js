import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    // Button,
    TextInput,
    Image,
    AsyncStorage
} from 'react-native';

import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import BaseContainer from '../components/BaseContainer'
import TopBar from '../components/TopBar.js';
import Button from '../components/Button.js';
import ButtonSmall from '../components/ButtonSmall.js';
import Profile from '../components/Profile.js';

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import style from '../styles/style.js';

class HomePage extends React.Component {
    constructor() {
        super();

        this.signUserOut = this._signUserOut.bind(this)
        this.confirm = this._confirm.bind(this)


        this.state = {
            login: true,
            email: '',
            password: '',
            password2: '',
            loading: true,
            // userId: AsyncStorage.getItem(GC_USER_ID)
        };

        
    }


    componentWillMount() {
        try {
            AsyncStorage.getItem(GC_USER_ID).then((userId) => {
                this.setState({ userId })
            })
        } catch(error) {
            throw error
        } finally {
            this.setState({
                loading: false,
            })
        }
    }

    static navigationOptions = {
        drawerLabel: 'Home',
    }

    _saveUserData = async (id, token) => {
        try {
            await AsyncStorage.setItem(GC_USER_ID, id)
            await AsyncStorage.setItem(GC_AUTH_TOKEN, token)
            this.setState({
                userId: id
            })
        } catch (error) {
            // Error saving data
            throw error
        }
    }

    _signUserOut = async () => {
        try {
            await AsyncStorage.setItem(GC_USER_ID, '')
            await AsyncStorage.setItem(GC_AUTH_TOKEN, '')
            this.setState({
                userId: null
            })
        } catch(error) {
            // catch error
        }
    }

    _confirm = async () => {
        const { email, password } = this.state
        if (this.state.login) {
          const result = await this.props.authenticateUserMutation({
            variables: {
              email,
              password
            }
          })
          const { id, token } = result.data.authenticateUser
          this._saveUserData(id, token)
        } else {
          const result = await this.props.signupUserMutation({
            variables: {
              email,
              password
            }
          })
          const { id, token } = result.data.signupUser
          this._saveUserData(id, token)
        }
        // navigate('Profile');
        // this.props.history.push(`/`)
    }


    render() {
        const { navigate } = this.props.navigation;
        const logoFull = require('../assets/logo/full.png');
        // const userId = AsyncStorage.getItem(GC_USER_ID)

        

        return (
            <BaseContainer>
                { this.state.loading && 
                    <Text>Loading..</Text>
                }
                { this.state.userId &&
                    <Profile
                        navigate={navigate}
                        signOut={this.signUserOut} />
                }
                { !this.state.userId && !this.state.loading &&
                    <View style={{ 
                        flex: 1,
                        width: '100%',
                        alignItems: 'center'
                     }}>
                        <Image
                            source={ logoFull }
                            style={{
                                // flex: 1,
                                resizeMode: 'center',
                                width: '70%',
                                marginBottom: 20,
                                marginTop: 20
                            }}/>
                        <TextInput
                            style={style.input}
                            placeholder={ this.state.login ? `Enter an Email Address` : `Enter an Email Address` }
                            onChangeText={(text) => this.setState({ email: text })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            autoCapitalize='none'
                            />
                        <TextInput
                            style={style.input}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ password: text })}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            autoCapitalize='none'
                            secureTextEntry={true}
                            />
                        { !this.state.login &&
                            <TextInput
                                style={style.input}
                                placeholder="Confirm Password"
                                onChangeText={(text) => this.setState({ password2: text })}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                />
                        }
                        <Button
                            style={ style.cta, style.ctaYellow }
                            onPress={this.confirm}
                            title={ this.state.login ? `Login` : `Sign Up`}
                            color='#FFEA51'
                            />
                        <Text style={{
                            marginTop: 30,
                            marginBottom: 10,
                            color: '#92DFFF'
                        }}>
                            { this.state.login ? `Don't have an account?` : `Already have an account?` }
                        </Text>
                        <ButtonSmall
                            title={ this.state.login ? `Create One` : `Log In` }
                            onPress={() => this.setState({ login: !this.state.login })}/>
                    </View>
                }
            </BaseContainer>
        )
    }
}

const SIGNUP_USER_MUTATION = gql`
mutation SignupUserMutation($email: String!, $password: String!) {
  signupUser(
    email: $email,
    password: $password,
  ) {
    id
    token
  }
}
`

const AUTHENTICATE_USER_MUTATION = gql`
mutation AuthenticateUserMutation($email: String!, $password: String!) {
  authenticateUser(
    email: $email,
    password: $password
  ) {
    token
    id
  }
}
`

export default compose(
graphql(SIGNUP_USER_MUTATION, { name: 'signupUserMutation' }),
graphql(AUTHENTICATE_USER_MUTATION, { name: 'authenticateUserMutation' })
)(HomePage)