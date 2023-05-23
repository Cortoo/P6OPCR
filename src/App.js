import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from './Pages/About';

const App = () => {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element = {<Home />}> </Route>
        <Route path='/about' element ={<About />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
