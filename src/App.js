import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'

import Navbar from './components/Navbar'
import CardInfo from './components/CardInfo';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path ="/cardinfo/:name" element= { <CardInfo/>}/>
      <Route path ="/" element= { <Home/>}/>
     
      </Routes>
    </BrowserRouter>

     
    
  );
}

export default App;
