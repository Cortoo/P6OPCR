import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from './Pages/About';
import Appartements from './Pages/Appartement';
import Erreur from './Pages/Error';


const App = () => {

  return (
    <div className="App">
      
      <Routes>
      
        <Route path="/" element = {<Home />}> </Route>
        <Route path='/about' element ={<About />}/>
        <Route path="/Appartements/:appartementId" element={<Appartements />} />
        <Route path='/*' element ={<Erreur />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
//<Route path="/Appartements/:appartementId" element={<Appartements />} />

//<Route path='/Appartements' element ={<Appartements />}/>
//<Route path="/Appartements/:appartementId" element={<Appartements />} />