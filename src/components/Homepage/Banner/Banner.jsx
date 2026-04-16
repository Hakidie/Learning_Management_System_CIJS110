import './Banner.css';

import bannerPicture from '../../../assets/Pictures/banner.svg';

function Banner() {
  return (
    <div className='banner-container'>
      <div className="banner-content-container">
        <h2>Unlock Your Potential with Byway</h2>
        <p>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. </p>
        <button className='start-button'>
          Start your instructor journey
        </button>
      </div>

      <div className="banner-picture-container">
        <img src={bannerPicture} alt="banner picture" />
      </div>
    </div>
  );
}

export default Banner;