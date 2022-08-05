import { createAsyncThunk } from '@reduxjs/toolkit';
import coinCapService from '../services/coinCapService';

const FETCH_ALL = 'coins/FETCH_ALL';
const FULFIL_FETCH_ALL = 'coins/FETCH_ALL/fulfilled';
const FETCH_COIN_HISTORY = 'coins/FETCH_COIN_HISTORY';
const FULFIL_FETCH_COIN_HISTORY = 'coins/FETCH_COIN_HISTORY/fulfilled';

export default function coinsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return state;
    case FULFIL_FETCH_ALL: {
      let coins = [];
      if (action.payload) {
        coins = action.payload.data.map((item) => ({
          id: item.id,
          symbol: item.symbol,
          name: item.name,
          price: Math.floor(item.priceUsd),
          changePercent24Hr: (Math.round(item.changePercent24Hr * 100) / 100).toFixed(2),
        }));
        return coins;
      }
      return state;
    }
    case FETCH_COIN_HISTORY:
      return state;
    case FULFIL_FETCH_COIN_HISTORY: {
      const coinHistoryData = {};

      if (action.payload) {
        coinHistoryData[action.payload[0]] = action.payload[1].data.map((item) => ({
          date: item.date,
          price: Math.floor(item.price),
        }));
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

export const getCoinHistoricalData = createAsyncThunk(
  FETCH_COIN_HISTORY,
  async (id, thunkAPI) => {
    const response = await coinCapService.getCoinHistoricalData(id);
    thunkAPI.dispatch({
      type: FULFIL_FETCH_COIN_HISTORY,
      payload: [id, response.data],
    });
  },
);
