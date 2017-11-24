import {createStore,applyMiddleware, compose}   from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';


export default createStore(
	reducers,
	{ counter:0, changer:['HELLO PIPPO'] },compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
 ))