import React from 'react';
import "../Styles/about.css";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AboutBanner from '../Components/Banner/AboutBanner';
import Wrapper from '../Components/Wrapper/Wrapper';
import aboutArray from "../assets/Datas/aboutArray.json"



const About = () => {
    return (
        <>
           <Navbar/>
            <AboutBanner/>
         <div className='about_global'>
            {aboutArray.map((item, id)=>(
            <Wrapper key={id} title={item.title} content={item.content}/>
            ))}
              
        </div> 
        <Footer/>
            
            </>
    );
};

export default About;