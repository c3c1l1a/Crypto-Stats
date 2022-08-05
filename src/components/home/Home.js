import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CoinItem from '../coinItem/CoinItem';
import './Home.css';

const Home = ({ setCoinId }) => {
  const coins = useSelector((state) => state.coins);

  return (
    <div className="home">
      <ul className="coin-list">
        {coins.map((coin, index) => {
          let color = '';
          if (index % 4 === 0 || index % 4 === 3) color = 'dark';
          else { color = 'light'; }

          return (<CoinItem color={color} key={coin.id} coin={coin} setCoinId={setCoinId} />);
        })}
      </ul>
    </div>
  );
};

Home.propTypes = {
  setCoinId: PropTypes.func.isRequired,
};

export default Home;
