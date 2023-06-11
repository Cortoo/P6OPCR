import React from 'react';
import './AppartHeader.css';

const AppartementsHeader = (props) => {
  const appart = props.appart;
  const name = appart?.host?.name || '';
  const [firstName, lastName] = name.split(' ');

  return (
    <div className='appartements-header'>
      <div className='appartements-info'>
        <div className='appartements-title'>
          <h1>{appart?.title}</h1>
          <h2>{appart?.location}</h2>
        </div>

        <div className='appartements-filters'>
          {appart?.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className='appartements-owner'>
        <div className='owner-identity'>
        <div className='owner-name'>
          <span>{lastName}</span>
          <span>{firstName}</span>
        </div>
        <div className='owner-photo'>
          <img src={appart?.host?.picture} alt='' />
        </div>
        </div>
        <div className='owner-stars'>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={props.appart?.rating >= num ? 'full_star' : ''}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppartementsHeader;
