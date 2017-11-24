import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {increment, decrement, write, erase} from './actions';


class Child extends Component {
// Mandatory if we want to have the store in child component
static contextTypes = {store: PropTypes.object}; 

 clickMe = (event) => {
 let store = this.context.store;

store.dispatch(increment(200));
store.dispatch(write('HELLO WORLD'));
store.dispatch(erase('HELLO PIPPO'));



 event.target.innerHTML = 'STATE IS NOW: '+ store.getState().counter;

 console.log(store.getState())
 
    
  }; 

componentDidMount () {};
  render() {
    return (
     <p ref = 'test' onClick={this.clickMe}>THIS IS THE CHILD COMPONENT</p>
    );
  }
}

export default Child;