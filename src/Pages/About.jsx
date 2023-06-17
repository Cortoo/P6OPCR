import React from 'react';
import "../Styles/about.css";
import AboutBanner from '../Components/Banner/AboutBanner';
import Wrapper from '../Components/Wrapper/Wrapper';
import aboutArray from "../assets/Datas/aboutArray.json"



const About = () => {
    return (
        <>
           
            <AboutBanner/>
         <div className='about_global'>
            {aboutArray.map((item, id)=>(
            <Wrapper  wrapperClassName="wrapper-about" key={id} title={item.title} content={item.content}/>
            ))}
              
        </div> 
        
            
            </>
    );
};

export default About;