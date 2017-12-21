import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    // Button,
    TextInput,
    Image,
    AsyncStorage,
    // DeviceEventEmitter
} from 'react-native';

import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import { connect } from 'react-redux';

import BaseContainer from '../components/BaseContainer'
import Button from '../components/Button.js';
import ButtonSmall from '../components/ButtonSmall.js';
import Profile from '../components/Profile.js';
import Login from '../components/Login.js';

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import style from '../styles/style.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.signUserOut = this._signUserOut.bind(this)
        this.confirm = this._confirm.bind(this)
        this.checkUserId = this._checkUserId.bind(this)
        this.handleEmail = this._handleInput.bind(this, 'email')
        this.handlePassword = this._handleInput.bind(this, 'password')
        this.handlePassword2 = this._handleInput.bind(this, 'password2')

        
        // store.subscribe(this.render());
        

        this.state = {
            login: true,
            email: '',
            password: '',
            password2: '',
            loading: true,
            // userID: store.getState().userId,
            loginBtnLoading: false
        };

        
    }


    componentWillMount() {
        this.checkUserId();
    }


    _checkUserId = async () => {
        console.log(`checking user ID`);
        try {
            const id = await AsyncStorage.getItem(GC_USER_ID);
            console.log(`user ID: ${id}`);
            this.props.signUserIn(id);
            // store.dispatch({
            //     type: 'SIGN_IN',
            //     userId: id
            // });
        } catch(error) {
            // catch error
        } finally {
            this.setState({loading: false});
        }
    }

    static navigationOptions = {
        drawerLabel: 'Home',
    }

    _saveUserData = async (id, token) => {
        console.log(`saving user data`);
        try {
            await AsyncStorage.setItem(GC_USER_ID, id)
            await AsyncStorage.setItem(GC_AUTH_TOKEN, token)
            // this.setState({
            //     userId: id
            // })
            this.props.signUserIn(id);
        } catch (error) {
            // Error saving data
            // throw error
            console.log(error);
        }
    }

    _signUserOut = async () => {
        try {
            await AsyncStorage.setItem(GC_USER_ID, '')
            await AsyncStorage.setItem(GC_AUTH_TOKEN, '')
            // this.setState({
            //     userId: null
            // })
            this.props.signUserOut();
        } catch(error) {
            // catch error
        }
    }

    _confirm = async () => {
        this.setState({loginBtnLoading: true});
        const { email, password } = this.state
        if(!email || !password) this.setState({ loginBtnLoading: false });
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
        this.setState({ loginBtnLoading: false });
    }

    // _signOut = async () => {
    //     try {
    //         await AsyncStorage.removeItem(GC_USER_ID)
    //         await AsyncStorage.removeItem(GC_AUTH_TOKEN)
    //         this.setState({
    //             userID: null,
    //         })
    //     } catch (error) {
    //         // Error saving data
    //     } finally {
    //         this.props.navigation.navigate('HomePage');
    //     }
    // }

    _handleInput(key, val) {
        this.setState({
            [key]: val
        });
    }


    render() {
        const navigation = this.props.navigation;
        // const logoFull = require('../assets/logo/full.png');
        // const userId = AsyncStorage.getItem(GC_USER_ID)
        // console.log(`User ID in render: ${this.state.userId}`);
        // console.log(`store.getState().userId in homepage: ${store.getState().userId}`);

        console.log(this.props);

        return (
            <BaseContainer>
                { this.state.loading && 
                    <Text>Loading..</Text>
                }
                { this.props.userId && !this.state.loading &&
                    <Profile
                        id={this.props.userId}
                        navigation={navigation}
                        signOut={this.signUserOut} />
                }
                { !this.props.userId && !this.state.loading &&
                    <Login
                        // dispatch={this.props.dispatch}
                        handleEmail={this.handleEmail}
                        handlePassword={this.handlePassword}
                        handlePassword2={this.handlePassword2}
                        confirm={this.confirm} />
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

const mapStateToProps = (state) => {
    return {
      userId: state.userId,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        signUserIn: (userId) => {
            dispatch({
                type: 'SIGN_IN',
                userId: userId
            });
        },
        signUserOut: () => {
            dispatch({
                type: 'SIGN_OUT',
            });
        }
    };
};
  
const HomePageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


export default compose(
graphql(SIGNUP_USER_MUTATION, { name: 'signupUserMutation' }),
graphql(AUTHENTICATE_USER_MUTATION, { name: 'authenticateUserMutation' })
)(HomePageContainer)