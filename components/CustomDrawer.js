import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Button } from './Button';
import React from 'react'
import { View, Text } from 'react-native';

class CustomDrawer extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {  
        // props.items.push()

        return (
            <ScrollView style={{
            backgroundColor:"#004596"
            }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerItems {...props} />
                </SafeAreaView>
                <Text>Sign Out</Text>
            </ScrollView>
        )
    }
}

export default CustomDrawer;