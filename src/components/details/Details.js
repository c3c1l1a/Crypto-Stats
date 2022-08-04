import PropTypes from 'prop-types';

const Details = ({ coinId }) => {
  console.log(coinId);
  return (
    <div className="details">
      {coinId}
    </div>
  );
};

Details.defaultProps = {
  coinId: '',
};

Details.propTypes = {
  coinId: PropTypes.string,
};
export default Details;
