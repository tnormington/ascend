import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TopBar extends React.Component {
    render() {
        const n = this.props.navigation;

        return (
            <View style={styles.topBar}>
                <Button
                    onPress={() => n.navigate('DrawerOpen') }
                    title="Menu"
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBar: {
        marginTop: 50,
        height: 46,
      flexDirection: 'row',
      padding: 10
    }
  });