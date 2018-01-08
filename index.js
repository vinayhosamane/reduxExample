import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import reducers from './reducer';

import { createStore, compose, composeEnhancers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import App from './App';

// const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(logger),
//     // other store enhancers if any
// );

 //const enhancer = composeEnhancers();

const store = createStore(reducers, applyMiddleware(logger));

const MyApp = () => (
   
    // const composeEnhancers =
    // typeof window === 'object' &&
    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //     // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    //   }) : compose;

    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('reduxLoginFlow',()=>MyApp);
