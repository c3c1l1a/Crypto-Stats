import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import coinsReducer from './coins';

const rootReducer = combineReducers({
  coins: coinsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
