/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Login from './components/Login.js';
import { Provider } from 'react-redux';
import reducers from './reducer';

import { createStore, compose, composeEnhancers,applyMiddleware } from 'redux';

import logger from 'redux-logger';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      testing:true
    }

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(){
    console.log("inside onUpdate method");
    //testing component will receive props
    // this.setState({
    //   testing:false
    // });
  }

  render() {
    const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers();
    const store = createStore(reducers, enhancer,applyMiddleware(logger));
    return (
      <Provider store={store}>
        <Login 
        passingProps={this.state.testing}
        onUpdate = {this.onUpdate}
        />
       </Provider>
    );
  }
}

