import React, { useEffect, useState } from 'react';
import "./Gallery.css";
import Cards from '../Cards/Cards'
import LogementArray from '../../assets/Datas/logements.json';




const Gallery = () => {

    const[apparts, setApparts] = useState([]);

useEffect(appartementsData, []);

function appartementsData () {
    
fetch('logements.json')
.then((response) =>{
	return response.json()
	})
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

export default Gallery;