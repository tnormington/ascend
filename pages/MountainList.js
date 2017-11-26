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
import BaseContainer from '../components/BaseContainer.js';
import Mountain from '../components/Mountain.js';

import style from '../styles/style.js'

class MountainList extends React.Component {
  static navigationOptions = {
    // title: 'Elevate',
    drawerLabel: 'All Mountains',
  }
  
  constructor(props) {
    super(props);
    // this.n =  navigate;

    // console.log(Data)
    // console.log('hello world')
    this.state = {
      // data: this.props.allMountainsQuery,
      mountains: Data,
      measurement: 'feet',
      tabState: 'all'
    };
  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
        <BaseContainer>
          <TopBar navigate={navigate}></TopBar>
          <Text>All Mountains</Text>
          <View style={style.content}>
            <FlatList
              data={this.state.mountains}
              renderItem={({item}) => {
                // console.log(item.name)
                if(!item) return false
                return (
                    <Mountain
                      // key={climb.name}
                      elevation={item.elevation[this.state.measurement]}
                      name={item.name}
                      // date={climb.dateClimbed}
                      />
                )
              }}
              keyExtractor={(item) => {
                return item.name
              }}
              style={style.mountainList}
            />
          </View>
        </BaseContainer>
    );
  }

  
}

// const styles = StyleSheet.create({
//   mountainList: {
//     flex: 1,
//   },
// });


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