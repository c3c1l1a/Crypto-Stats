import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const CoinChart = ({ coinId }) => {
  const coinData = useSelector((state) => state.coinsHistory);

  const options = {
    responsive: true,
    pointStyle: 'circle',
    radius: '3',
    hoverRadius: '3',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${coinId} Line Chart`,
      },
    },
  };

  let labels = [];

  if (Object.keys(coinData).length > 0) {
    labels = coinData[coinId].map((item) => {
      const temp1 = item.date.replace('T00:00:00.000Z', '');
      const temp2 = temp1.substring(5);
      console.log(temp2);
      return temp2;
    });
  }

  const data = {
    labels,
    datasets: [
      {
        label: coinId,
        data: labels.map((item, index) => (coinData ? coinData[coinId][index].price : 0)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132)',
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  );
};

CoinChart.defaultProps = {
  coinId: '',
};

CoinChart.propTypes = {
  coinId: PropTypes.string,
};

export default CoinChart;
