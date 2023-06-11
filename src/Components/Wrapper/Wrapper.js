import React, { useState } from 'react';
import './Wrapper.css';

const Wrapper = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`wrapper ${isExpanded ? 'expanded' : ''} ${props.wrapperClassName}`}>
      <div className={`title-wrapper ${props.titleWrapperClassName}`} onClick={handleToggle}>
        <h2 className={`title ${props.titleClassName}`}>{props.title}</h2>
        <div className="icon-wrapper">
        <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </div>
      </div>
      {isExpanded && <div className="content">{props.content}</div>}
    </div>
  );
};

export default Wrapper;






































/*import React, { useState } from 'react';

const Wrapper = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div>
        <h1>About Page</h1>
        <div className={isExpanded ? 'wrapper expanded' : 'wrapper'}>
          <div className="header" onClick={handleToggle}>
            <h2>Wrapper 1</h2>
          </div>
          {isExpanded && (
            <div className="content">
              <p>Contenu du Wrapper 1</p>
            </div>
          )}
        </div>
        <div className={isExpanded ? 'wrapper expanded' : 'wrapper'}>
          <div className="header" onClick={handleToggle}>
            <h2>Wrapper 2</h2>
          </div>
          {isExpanded && (
            <div className="content">
              <p>Contenu du Wrapper 2</p>
            </div>
          )}
        </div>
        
      </div>
    );
  };
  
  export default Wrapper; */
  





/*import React, { useState } from 'react';
import "./Wrapper.css"

const Wrapper = (props) => {
    const[isVisible, setIsvisible] = useState(true);
    const handleClick =() =>{
        setIsvisible(!isVisible);
    }
    return (
        <div className='global-wrapper'>
            <div className='description-title_chevron'>
                <h3>{props.title}</h3>
                <i className='fa-solid fa-chevron-up' onClick={handleClick}></i>
            </div>
            {isVisible? (
            <p className='description_content'>
                {props.content}
            </p> 
             ) : (
            <></>
            )}
        </div>
    );
};

export default Wrapper; */