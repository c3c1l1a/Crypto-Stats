import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CoinItem from '../coinItem/CoinItem';
import './Home.css';

const Home = ({ setCoinId }) => {
  const coins = useSelector((state) => state.coins);

  return (
    <div className="home">
      <ul>
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} setCoinId={setCoinId} />
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  setCoinId: PropTypes.func.isRequired,
};

export default Home;
