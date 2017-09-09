'use strict';

import {createStore, combineReducers, compose} from 'redux';

import AppReducer from './../../components/px-app/store';
// Add router5?
// import {router5Middleware, router5Reducer} from 'redux-router5';
// import router from '../router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  app: AppReducer
});

const enhancers = composeEnhancers();

// Bind store to reducer
export default createStore(reducers, enhancers);
