import React from 'react';
import '../Styles/home.css'
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Gallery from '../Components/Gallery/Gallery';




const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Banner/>
            <Gallery/> 
            <Footer/>

        </div>
    );
};

export default Home;