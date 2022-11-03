import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAllCoins = async () => http.get('/', {
  params: {
    limit: 100,
  },
});

const getCoinHistoricalData = async (id) => http.get(`/${id}/history`, {
  params: {
    interval: 'd1',
    start: Date.now() - (86400 * 30 * 1000),
    end: Date.now(),
  },
});

const coinCapService = {
  getAllCoins,
  getCoinHistoricalData,
};

export default coinCapService;
