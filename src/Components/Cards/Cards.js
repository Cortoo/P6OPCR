import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom';

function Cards(props) {
  
  
  
  
  return (
    
    <Link to={`/Appartements/${props.id}`}>
      <div className= "cards">
        <img src= { props.imageUrl }  alt="" />
        <div className='global-title'>
        <div className = "title_card">{ props.title}</div>
        </div>
      </div>
  </Link>
  );
}

export default Cards