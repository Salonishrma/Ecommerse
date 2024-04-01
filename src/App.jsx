import React, { useState } from "react"; 
import Navtag from "./Nav"; 
import Cont from "./Content"; 
import Options from "./options"; 
import Details from "./Detail"; 
import NewArrivals from "./NewArrivals"; 
import Footwear from "./Footwear";
import Men from "./Men"; 
import Women from "./Women";
import Sale from "./Sale";
import Kids from "./Kids";
import Sports from "./Sports";
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
          <div><Details /></div> 
          <div><Cont /></div> 
        </> 
      )} 
    </> 
  ); 
} 
 
export default App;
