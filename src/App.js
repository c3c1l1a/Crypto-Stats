import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import Banner from './components/banner/Banner';
import Details from './components/details/Details';
import { fetchAllCoins } from './redux/coins';
import './App.css';

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
      <NavLink className="home-nav" claonClick={onClick} to="/">
        <svg className="back-button-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z" />
        </svg>
      </NavLink>
      <Banner />
      <Routes>
        <Route exact path="/" element={<Home setCoinId={setCoinId} />} />
        <Route path="details/*" element={<Details coinId={coinId} />} />
      </Routes>
    </div>
  );
}

export default App;
