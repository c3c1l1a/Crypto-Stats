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
    aspectRatio: 0.8,
    pointStyle: 'circle',
    radius: '5',
    hoverRadius: '5',
    drawBorder: false,
    scales: {
      y: {
        ticks: { color: '#fff', beginAtZero: true },
      },
      x: {
        ticks: { color: '#fff', beginAtZero: true },
      },

    },
    plugins: {
      legend: {
        position: 'top',
        color: '#fff',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: false,
        text: `${coinId} price`,
        color: '#fff',
      },
    },
  };

  let labels = [];

  if (Object.keys(coinData).length > 0) {
    labels = coinData[coinId].map((item) => {
      const temp1 = item.date.replace('T00:00:00.000Z', '');
      const temp2 = temp1.substring(5);
      return temp2;
    });
  }

  const data = {
    labels,
    datasets: [
      {
        label: coinId,
        data: labels.map((item, index) => (coinData ? coinData[coinId][index].price : 0)),
        borderColor: '#f2c827',
        backgroundColor: '#dd467f',
        borderWidth: '2',
      },
    ],
  };

  return (
    <Line className="chart" options={options} data={data} />
  );
};

CoinChart.defaultProps = {
  coinId: '',
};

CoinChart.propTypes = {
  coinId: PropTypes.string,
};

export default CoinChart;
