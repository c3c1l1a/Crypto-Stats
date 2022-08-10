import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CoinItem from '../coinItem/CoinItem';
import Search from '../search/Search';
import './Home.css';

const Home = ({ setCoinId }) => {
  const coins = useSelector((state) => state.coins);
  let displayItems = [];
  const [filterState, setFiltedCoins] = useState();
  if (filterState !== undefined) {
    displayItems = filterState;
  } else {
    displayItems = coins;
  }
  return (
    <div className="home">
      <Search setFiltedCoins={setFiltedCoins} coins={coins} />
      <ul className="coin-list">
        {displayItems.map((coin, index) => {
          let color = '';
          if (index % 4 === 0 || index % 4 === 3) color = 'dark';
          else { color = 'light'; }

          return (
            <CoinItem
              color={color}
              key={coin.id}
              coin={coin}
              setCoinId={setCoinId}
            />
          );
        })}
      </ul>
    </div>
  );
};

Home.propTypes = {
  setCoinId: PropTypes.func.isRequired,
};

export default Home;
