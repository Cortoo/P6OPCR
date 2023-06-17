
import '../Styles/home.css'
import Banner from '../Components/Banner/Banner';
import React, { useEffect, useState } from 'react';
import "../Components/Gallery/Gallery.css";
import Cards from '../Components/Cards/Cards'
import LogementArray from '../assets/Datas/logements.json';




        const Gallery = () => {
            const[apparts, setApparts] = useState([]);

            useEffect(() => {
                appartementsData();
              }, []);
            

            function appartementsData () {   
            fetch('logements.json')
            .then((response) => response.json())
                .then((res) => setApparts(res))
                .catch(console.error);
                
                }
            
                return (
                    <div className='Gallery'>
                        {apparts.map((appart) =>(
                            <Cards key= {appart.id}  title={appart.title} imageUrl={appart.cover}   id={appart.id} />
            
                        ))}
                      
                        
                    </div>
                );
            };
            

            const Home = () => { 
    return (
        <div className='home'>
            <Banner/>
            <Gallery/> 
        </div>
    );
};

export default Home;