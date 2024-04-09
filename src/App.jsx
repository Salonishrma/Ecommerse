import React, { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navtag from "./Nav"; 
import Options from "./options";  
import NewArrivals from "./NewArrivals"; 
import Footwear from "./Footwear";
import Men from "./Men"; 
import Women from "./Women";
import Sale from "./Sale";
import Kids from "./Kids";
import Sports from "./Sports";
import Home from "./Home";
import ProductDetails from "./ ProductDetails";

function App() { 
  const [selectedOption, setSelectedOption] = useState(null); 
 
  return ( 
    <Router> 
      <div>
        <div><Navtag /></div> 
        <div> 
          <Options setSelectedOption={setSelectedOption} /> 
        </div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  ); 
} 
 
export default App;
