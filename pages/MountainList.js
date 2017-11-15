import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import { graphql, gql } from 'react-apollo';

import Data from '../data/Data.js';

import ListItem from '../components/ListItem.js';
import TopBar from '../components/TopBar.js';

class MountainList extends React.Component {
    static navigationOptions = {
        // title: 'Elevate',
        drawerLabel: 'All Mountains',
    }
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.allMountainsQuery,
      measurement: 'us'
    };
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <Image 
              source={require('../assets/bg/landing.png')}
              style={{
                flex: 1,
                resizeMode: 'center',
                // backgroundColor: 'transparent',
                width: 320,
                height: 680
              }}>
              <TopBar navigation={this.props.navigation}></TopBar>
              <Text>All Mountains</Text>
              <FlatList
              data={this.state.data}
              renderItem={({item}) => <ListItem item={item} key={item.rank}></ListItem> }
              keyExtractor={(item) => item.rank}
              style={styles.mountainList}
              />
            </Image>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
  mountainList: {
    flex: 1,
  },
});


const ALL_MOUNTAINS_QUERY = gql`
  query AllMountainsQuery {
    allMountains {
      id
      createdAt
      name
      elevation
    }
  }
`

export default graphql(ALL_MOUNTAINS_QUERY, { name: 'allMountainsQuery' }) (MountainList)