import React from 'react';
import"./Footer.css"
import footerlogo from "./../../assets/footerlogo.png"


const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_logo'>
<img src={footerlogo} alt="logo de kasa" />
            </div>
            <div className='footer_copyright'>
            © 2020 Kasa. All rights reserved
            </div>
        </div>
    );
};

export default Footer;