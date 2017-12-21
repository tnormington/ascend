import './ReactotronConfig'
import React from 'react';

import { Image, AsyncStorage } from 'react-native';

import {
  // StackNavigator,
  DrawerNavigator
} from 'react-navigation';

import { 
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from 'react-apollo';

import { ApolloLink } from 'apollo-client-preset'
import { HttpLink } from 'apollo-link-http'

import { GC_USER_ID, GC_AUTH_TOKEN } from './constants'

import { Provider } from 'react-redux';
import store from './store'

import HomePage from './pages/HomePage';
import MountainList from './pages/MountainList';
import RecordHike from './pages/RecordHike';
import MountainPage from './pages/MountainPage';


import CustomDrawer from './components/CustomDrawer';

import style from './styles/style.js';

const networkInterface = createNetworkInterface({
  // uri: 'https://api.graph.cool/simple/v1/cj7i2bgpy01e60199okkfokmy' // Ascend
  uri: 'https://api.graph.cool/simple/v1/cja5zta5a0zzz0128w3t9mekp' // Server
})

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cja5zta5a0zzz0128w3t9mekp' })

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = AsyncStorage.getItem(GC_AUTH_TOKEN)
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

const client = new ApolloClient({
  networkInterface,
  link: httpLinkWithAuthToken
})

const Drawer = DrawerNavigator(
{ // Routes
  Home: { screen: HomePage },
  Mountains: { screen: MountainList },
  Mountain: { screen: MountainPage },
  RecordHike: { screen: RecordHike },
}, { // Config
  contentComponent: CustomDrawer,
  contentOptions: {
    activeBackgroundColor: '#fff',
    activeTintColor: '#4986CE',
    inactiveTintColor: '#fff'
  }
});



const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
        <Drawer />
    </ApolloProvider>
  </Provider>
);

// store.subscribe(App);

export default App;