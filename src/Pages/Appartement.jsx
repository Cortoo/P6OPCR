import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppartementsHeader from '../Components/AppartHeader/AppartHeader';
import Wrapper from '../Components/Wrapper/Wrapper';
import '../Styles/appartement.css'
import Carrousel from '../Components/Carrousel/Carrousel';

const Appartements = () => {
	const params = useParams();
	const appartId = params.appartementId;
	const[appart, setAppart] = useState(null);
	
	


	useEffect(() => {
	fetch('../logements.json')
.then((response) =>{
		return response.json()
	})
    .then((apparts) => {
		//setAppart (apparts.find(({id}) => id === appartId));
		const AppartTest = apparts.find(({id}) => id === appartId) 
		setAppart (AppartTest);
		if (AppartTest == null) {
			window.location.href ="/404";
		}
	})
    .catch(console.error);
	}, [appartId]);
    
	
    if (appart != null) { 
	return (	
			<div className='appartements-card'>
				<Carrousel pictures={appart.pictures}/>
				<AppartementsHeader appart={appart}/>
				<div className='wrapper-description-global'>
<Wrapper  wrapperClassName="wrapper-appart" title ='Description' content={appart.description}/>
<Wrapper wrapperClassName="wrapper-appart"
              title='Équipements'
              content={
                <ul>
                  {appart.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
				</div>

			</div>
			);
	}
};

export default Appartements;

