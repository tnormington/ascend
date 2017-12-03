// Vendor
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// Pages
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';

// Style
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/ascend" component={Home}/>
          <Route path="/ascend/more-info" component={MoreInfo}/>
        </div>
      </Router>
    );
  }
}

export default App;
