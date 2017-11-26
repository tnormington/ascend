import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';


export default class SideMenu extends React.Component {
    // static navigationOptions = {
    //     drawerLabel: 'Side Menu'
    //     // drawerIcon: ({ tintColor }) => (
    //     // <Image
    //     //     source={require('./notif-icon.png')}
    //     // />
    //     // ),
    // };

    render() {
        return (
            <View>
                <Text>Side Menu</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        )
    }

}