import { createAsyncThunk } from '@reduxjs/toolkit';
import coinCapService from '../services/coinCapService';

const FETCH_COIN_HISTORY = 'coins/FETCH_COIN_HISTORY';
const FULFIL_FETCH_COIN_HISTORY = 'coins/FETCH_COIN_HISTORY/fulfilled';

export default function coinsHistoryReducer(state = {}, action) {
  switch (action.type) {
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
      console.log(coinHistoryData);
      return { ...state, ...coinHistoryData };
    }
    default:
      return state;
  }
}

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
