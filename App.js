import React from 'react';

import {
  // StackNavigator,
  DrawerNavigator
} from 'react-navigation';

import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';



import HomePage from './pages/HomePage.js';
import MountainList from './pages/MountainList.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
// import SideMenu from './components/SideMenu.js';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7i2bgpy01e60199okkfokmy'
})

const client = new ApolloClient({
  networkInterface
})

const Drawer = DrawerNavigator({
  Home: { screen: HomePage },
  Mountains: { screen: MountainList },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
});

const App = () => (
  <ApolloProvider client={client}>
    <Drawer />
  </ApolloProvider>
);

export default App;