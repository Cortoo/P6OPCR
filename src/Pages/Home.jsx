import React from 'react';
import '../Styles/home.css'
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards'; //remplacer par Gallery et idem en dessous



const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <Banner/>
            <Cards/> 
            <Footer/>

        </div>
    );
};

export default Home;