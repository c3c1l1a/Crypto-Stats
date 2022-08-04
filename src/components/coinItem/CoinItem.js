import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getCoinHistoricalData } from '../../redux/coinsHistory';
import CoinChart from './CoinChart';

const CoinItem = ({ coin }) => {
  const dispatch = useDispatch();

  const onClick = async (e) => {
    e.preventDefault();
    await dispatch(getCoinHistoricalData(coin.id));
  };

  return (
    <>
      <li><button type="submit" onClick={onClick}>{coin.symbol}</button></li>
      <CoinChart coinId={coin.id} />
    </>
  );
};

CoinItem.defaultProps = {
  coin: {},
};

CoinItem.propTypes = {
  coin: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool],
  )),
};

export default CoinItem;
