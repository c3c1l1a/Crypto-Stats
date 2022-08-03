import { createAsyncThunk } from '@reduxjs/toolkit';
import coinCapService from '../services/coinCapService';

const FETCH_ALL = 'coins/FETCH_ALL';
const FULFIL_FETCH_ALL = 'coins/FETCH_ALL/fulfilled';

export default function coinsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
    case FULFIL_FETCH_ALL: {
      let coins = [];
      if (action.payload) {
        coins = action.payload.data.map((item) => ({
          symbol: item.symbol,
          priceUsd: Math.floor(item.priceUsd),
          changePercent24Hr: Math.floor(item.changePercent24Hr),
        }));
        return coins;
      }
      return state;
    }
    default:
      return state;
  }
}

export const fetchAllCoins = createAsyncThunk(
  FETCH_ALL,
  async (_, thunkAPI) => {
    const response = await coinCapService.getAllCoins();
    thunkAPI.dispatch({
      type: FULFIL_FETCH_ALL,
      payload: response.data,
    });
  },
);
