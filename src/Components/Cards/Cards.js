import React from 'react';
import "./Cards.css";
import { Link } from 'react-router-dom';

function Cards({ id, imageUrl, title }) {
  const state = {
    appartsId: id
  };

  return (
    //<Link to="/Appartements" state={state}>
      <div className="cards">
        <img src={imageUrl} alt="" />
        <div className='global-title'>
          <div className="title_card">{title}</div>
        </div>
      </div>
    //</Link>
  );
}

export default Cards;