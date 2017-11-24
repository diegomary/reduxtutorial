import React, { Component } from 'react';
import {increment, decrement, write, erase} from './actions';
import {connect} from 'react-redux';

class ChildConnected extends Component {

 clickMe = (event) => {

 	this.props.dispatch(increment(200));
 	this.props.dispatch(decrement(1));
 	this.props.dispatch(write('HELLO ALL FOLKS'));
 	console.log(this.props.state.counter);

 
    
 }; 

componentDidMount () {};

  render() {
    return (
     <p ref = 'test' onClick = {this.clickMe}>{this.props.state.counter}</p>
    );
  }
}


function mapStateToProps(state) {
  return { state: state };
}


export default connect(mapStateToProps)(ChildConnected)

