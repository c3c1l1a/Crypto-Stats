import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import { fetchAllCoins } from './redux/coins';

function App() {
  const dispatch = useDispatch();
  const [coinId, setCoinId] = useState('');

  useEffect(() => async () => {
    await dispatch(fetchAllCoins());
  }, []);

  const onClick = () => {
    setCoinId('');
  };

  return (
    <div className="App">
      <NavLink onClick={onClick} to="/">Home</NavLink>
      <Routes>
        <Route exact path="/" element={<Home setCoinId={setCoinId} />} />
        <Route path="details/" element={<Details coinId={coinId} />} />
      </Routes>
    </div>
  );
}

export default App;
