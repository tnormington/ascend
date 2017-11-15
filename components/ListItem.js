import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListItem extends React.Component {
    render() {
        const i = this.props.item;
        return (
            <View style={styles.listItem}>
                <Text>{i.name}</Text>
                <Text>{i.elevation.feet}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
      flex: 1,
      flexDirection: 'column',
    //   justifyContent: 'space-between',
      padding: 10
    }
  });