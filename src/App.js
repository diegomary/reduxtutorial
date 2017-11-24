import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import Child from './child';
import ChildConnected from './childconnected'
//Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
class App extends Component {
// Mandatory if we want to have the store in child component
static contextTypes = {store: PropTypes.object}; 

constructor(props) {
  super(props);
  this.state = { init: false};
};

componentDidMount () {
  let store = this.context.store;

  console.log(store.getState().changer);
};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child/>
        <ChildConnected/>
      </div>
    );
  }
}

export default App;
