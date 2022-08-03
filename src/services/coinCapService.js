import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.coincap.io/v2/assets',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAllCoins = async () => http.get('/', {
  params: {
    limit: 10,
  },
});

const coinCapService = {
  getAllCoins,
};

export default coinCapService;
