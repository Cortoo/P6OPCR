import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppartementsHeader from '../Components/AppartHeader/AppartHeader';
import Wrapper from '../Components/Wrapper/Wrapper';
import '../Styles/Appartement.css'
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
		const AppartTest = apparts.find(({id}) => id === appartId) //apparts = import du json
		console.log(AppartTest);
		setAppart (AppartTest);
	})
    .catch(console.error);
	}, [appartId]);
    
    if (appart == null) { return (<div>Chargement...</div>) 
	} else {
	return (
		<>
			
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
			
			
			
		</>
			
			
			
		
			);
	}
};

export default Appartements;

/*const Appartements = () => {
	const location = useLocation();
	const[appart, setAppart] = useState(null);

	useEffect(appartementsData);

function appartementsData () {
    
fetch('logements.json')
.then((response) =>{
	return response.json()
	})
    .then((apparts) => {
		const appart = apparts.find((appart) => appart.id === location.appartemenId);
		setAppart(appart);
	})
    .catch(console.error);
    
    }
	if (appart == null) return <div>Chargement...</div>
	return (
		<>
			<Navbar/>
			<div className='appartements-card'>
				<Carrousel pictures={appart.pictures}/>
				<AppartementsHeader appart={appart}/>
				<div className='wrapper-description-global'>
<Wrapper title ='Description' content={appart.description}/>
<Wrapper title ='Equipement' content ={appart.equipements}                      />

				</div>

			</div>
			
			<Footer/>
			
			
		</>
	);
};

export default Appartements;*/