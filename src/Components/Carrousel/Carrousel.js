import React, { useState } from "react";
import "./Carrousel.css";

const Carrousel = (props) => {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.lenght);
  };
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.lenght - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  return (
    <div className="img-banner">
      <div className="image_container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ))}
      </div>
      <button className="btn-previous" onClick={moveToPrevious}>
        <i className="fas fa-regular fa-chevron-left"></i>
      </button>
      <span className="slide-counter">
        {currentPicture + 1}/{pictures.lenght}
      </span>
      <button className="btn-next" onClick={moveToNext}>
        <span className="slide-counter">
          {currentPicture + 1}/ {pictures.lenght}
        </span>
      </button>
    </div>
  );
};

export default Carrousel;