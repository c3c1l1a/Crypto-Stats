import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCoinHistoricalData } from '../../redux/coinsHistory';

const CoinItem = ({ color, coin, setCoinId }) => {
  const dispatch = useDispatch();

  const onClick = async () => {
    await dispatch(getCoinHistoricalData(coin.id));
    setCoinId(coin.id);
  };

  return (
    <NavLink className={`coin-item ${color}`} onClick={onClick} to={`details/${coin.id}`}>
      <div className="coin-item-price">
        <h2>{coin.price}</h2>
        <p>{coin.name}</p>
      </div>
      <div className="coin-item-indicator">
        <div className="coin-item-indicator-details">
          <p>
            {coin.changePercent24Hr}
            %
          </p>
          <svg className="up-arrow" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m14 28 10-10.05L34 28Z" /></svg>
        </div>
        <p>{coin.symbol}</p>
      </div>
    </NavLink>
  );
};

CoinItem.defaultProps = {
  coin: {},
  color: '',
};

CoinItem.propTypes = {
  coin: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool],
  )),
  setCoinId: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default CoinItem;
