import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import coinsReducer from './coins';
import coinsHistoryReducer from './coinsHistory';

const rootReducer = combineReducers({
  coins: coinsReducer,
  coinsHistory: coinsHistoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
