import PropTypes from 'prop-types';

const CoinItem = ({ coin }) => (
  <li>{coin.symbol}</li>
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
