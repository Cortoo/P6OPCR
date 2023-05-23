import React from 'react';
import "./Banner.css";
import imgBanner from "./../../assets/Banniere.jpg"

const Banner = () => {
    return (
        <div className="banner"> 
       <img src= {imgBanner} alt="Banniere Kasa"/>
        <h1>Chez vous, partout et ailleurs</h1>
            
        </div>
    );
};

export default Banner;