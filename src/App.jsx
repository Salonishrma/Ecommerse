import React, { useState } from "react"; 
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
function App() { 
  const [selectedOption, setSelectedOption] = useState(null); 
 
  return ( 
    <> 
      <div><Navtag /></div> 
      <div> 
        <Options setSelectedOption={setSelectedOption} /> 
      </div> 
      
      {selectedOption === "New Arrivals" ? ( 
        <div><NewArrivals /></div> 
      ) : selectedOption === "Footwear" ? (
        <div><Footwear /></div> 
      ) :  selectedOption === "Men" ? (
        <div><Men /></div> 
      ): selectedOption === "Sale" ? (
        <div><Sale /></div> 
      ): selectedOption === "Women" ? (
        <div><Women /></div> 
      ): selectedOption === "Kids" ? (
        <div><Kids /></div> 
      ): selectedOption === "Sports" ? (
        <div><Sports /></div> 
      ):( 
        <> 
          <div><Home/></div>
        </> 
      )} 
    </> 
  ); 
} 
 
export default App;
