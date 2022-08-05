import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCoinHistoricalData } from '../../redux/coinsHistory';

const CoinItem = ({ coin, setCoinId }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    console.log('test');
    await dispatch(getCoinHistoricalData(coin.id));
    setCoinId(coin.id);
  };

  return (
    <NavLink onClick={onClick} to={`details/${coin.id}`}>{coin.id}</NavLink>
  );
};

CoinItem.defaultProps = {
  coin: {},
};

CoinItem.propTypes = {
  coin: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool],
  )),
  setCoinId: PropTypes.func.isRequired,
};

export default CoinItem;
