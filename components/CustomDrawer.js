import { DrawerItems, SafeAreaView } from 'react-navigation';
import ButtonSmall from './ButtonSmall';
import React from 'react'

import { connect } from 'react-redux'
import {
    ScrollView
} from 'react-native';

class CustomDrawer extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#1D4A80',
                paddingTop: 20,
            }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItems {...this.props} />
                </SafeAreaView>
                <ButtonSmall
                    title="Sign Out"
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.signUserOut()
                    }} />
            </ScrollView>
        )
    }
}


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

const CustomDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomDrawer)

export default CustomDrawerContainer;