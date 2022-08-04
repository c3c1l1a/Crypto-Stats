import { useSelector } from 'react-redux';
import CoinItem from '../coinItem/CoinItem';

const Home = () => {
  const coins = useSelector((state) => state.coins);

  return (
    <div className="home">
      <ul>
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
