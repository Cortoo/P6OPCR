import React from 'react';
import './AppartHeader.css'

const AppartementsHeader = (props) => {
    const appart = props.appart;
    const name = appart.host.name;
    const [firstName, lastName] = name.split(" ");
    return (
        <div className='appartements-header'>
            <div className='appartements-title'>
                <h1>{appart.title}</h1>
                <h2>{appart.logation}</h2>
                <div className='appartements-filters'>
                    {appart.tag.map((tag)=>(
                        <span key={tag}>{tag}</span>

                    ))}

                </div>

            </div>
            <div className='appartements-owner'>
                <div className='name-forstname'>
                    <span>{firstName}</span>
                    <span>{lastName}</span>

                </div>
<div className='appartements-owner-avatar'>
    <img src="appart.host.picture" alt=""></img>

</div>
            </div>
            <div className='appartements-owner-stars'>
                {[1,2,3,4,5].map((num) =>(
                  <span key={num}className={props.appart.rating >= num? "full_star": ""}>★</span>  
                ))}
            </div>
            
        </div>
    );
};

export default AppartementsHeader;