import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from './Pages/About';
import Appartements from './Pages/Appartement';
import Erreur from './Pages/Error';
import Footer from './Components/Footer/Footer';
import Navbar from "./Components/Navbar/Navbar";


const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      
        <Route path="/" element = {<Home />}> </Route>
        <Route path='/about' element ={<About />}/>
        <Route path="/Appartements/:appartementId" element={<Appartements />} />
        <Route path='/*' element ={<Erreur />}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
//<Route path="/Appartements/:appartementId" element={<Appartements />} />

//<Route path='/Appartements' element ={<Appartements />}/>
//<Route path="/Appartements/:appartementId" element={<Appartements />} />