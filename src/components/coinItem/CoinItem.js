import PropTypes from 'prop-types';
import CoinChart from './CoinChart';

const CoinItem = ({ coin }) => (
  <>
    <li>{coin.symbol}</li>
    <CoinChart />
  </>
);

CoinItem.defaultProps = {
  coin: {},
};

CoinItem.propTypes = {
  coin: PropTypes.objectOf(PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array, PropTypes.bool],
  )),
};

export default CoinItem;
