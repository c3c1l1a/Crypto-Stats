import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Home from './components/home/Home';
import { fetchAllCoins } from './redux/coins';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(fetchAllCoins());
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
