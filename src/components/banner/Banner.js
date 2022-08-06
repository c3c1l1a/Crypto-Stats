import './Banner.css';
import banner from '../../assets/banner.png';

const Banner = () => (
  <div className="banner">
    <img className="banner-image" src={banner} alt="banner" />
    <div className="banner-details">
      <h1>Crypto Stats</h1>
      <p>200 Coins</p>
    </div>
  </div>
);
export default Banner;
