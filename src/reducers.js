import {combineReducers} from 'redux';

const counter = (state = 0, action) => {  
  switch (action.type) {
    case 'INCREMENT':
      return state + action.howMuch;
    case 'DECREMENT':
      return state - action.howLess;
    default:
      return state;
  }
};

const changer = (state = [], action) => {  
  const newState = [...state]; // Es6 array cloning
  switch (action.type) {
    case 'WRITE':	
    newState.push(action.newItem);
    return newState;   
    case 'ERASE':    
      let index = newState.indexOf(action.itemToRemove);      
      if (index > -1) { newState.splice(index, 1); return newState} else return state;
    default:
      return state;
  }
};

const reducers = combineReducers({counter:counter,changer:changer});

export default reducers