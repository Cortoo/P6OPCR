import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import AppartementsHeader from '../Components/AppartHeader/AppartHeader';
import Footer from '../Components/Footer/Footer';
import Wrapper from '../Components/Wrapper/Wrapper';
import '../Styles/Appartement.css'
import Carrousel from '../Components/Carrousel/Carrousel';

const Appartements = () => {
	const params = useParams();
	const appartId = params.appartementId;
	const[appart, setAppart] = useState(null);
	
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
    
    if (appart == null) { return (<div>Chargement...</div>) }
		else {
	return (
		<div className='appart'>
			Title : {appart.title}
		</div>
			/*<div className='appartements-card'>
				<Carrousel pictures={appart.pictures}/>
				<AppartementsHeader appart={appart}/>
				<div className='wrapper-description-global'>
<Wrapper title ='Description' content={appart.description}/>
<Wrapper title ='Equipement' content ={appart.equipements}                      />

				</div>

			</div>*/
			
			
			
		
	);}
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