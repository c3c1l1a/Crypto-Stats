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
        <svg className="open-card-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m24 31.3 7.3-7.3-7.3-7.3-2.1 2.1 3.7 3.7h-9.1v3h9.1l-3.7 3.7ZM24 44q-4.1 0-7.
                    75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8
                    1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575
                    6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275
                    6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7
                    24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"
          />
        </svg>
        <div className="coin-item-indicator-details">
          {coin.changePercent24Hr > 0
            ? (
              <p className="positive">
                {coin.changePercent24Hr}
                %
              </p>
            )
            : (
              <p className="negative">
                {coin.changePercent24Hr}
                %
              </p>
            )}

          {coin.changePercent24Hr > 0
            ? <svg className="up-arrow" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m14 28 10-10.05L34 28Z" /></svg>
            : <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30-10-9.95h20Z" /></svg>}

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
