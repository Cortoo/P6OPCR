import React from 'react';
import ImgBannerAbout from '../../assets/BanniereAbout.jpg';

const AboutBanner = () => {
    return (
        <div className='banner'>
            <img src={ImgBannerAbout} alt="Kasa A propos"  />   
        </div>
    );
};

export default AboutBanner;