import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import store from '../redux/configureStore';
import http from '../services/api';
import coinCapService from '../services/coinCapService';

const coinsSpy = jest.spyOn(coinCapService, 'getAllCoins');
let state = {};

describe('App Test', () => {
  beforeEach(() => {
    state = { 
      data: {
        data: [
          {
            changePercent24Hr: "4.6082010502700002",
            explorer: "https://blockchain.info/",
            id: "bitcoin",
            marketCapUsd: "460942043532.6761288040606192",
            maxSupply: "21000000.0000000000000000",
            name: "Bitcoin",
            priceUsd: "24113.0269735594423344",
            rank: "1",
            supply: "19115893.0000000000000000",
            symbol: "BTC",
            volumeUsd24Hr: "9898331887.6909480283126027",
            vwap24Hr: "23672.2907611691838649",
          }
        ],
    }
      
    };

  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'coins/FETCH_ALL',
      payload: [],
    }));
  });

  it('Loads and filters data from API correctly', async () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await coinsSpy.mockResolvedValue(state);
    const data = await coinCapService.getAllCoins();
    act(() => store.dispatch({
      type: 'coins/FETCH_ALL/fulfilled',
      payload: data.data,
    }));

    await waitFor(() => {
      expect(coinsSpy).toHaveBeenCalledTimes(1);
      expect(screen.getAllByText('Bitcoin').length).toBeGreaterThan(0);
    });
  });

});
