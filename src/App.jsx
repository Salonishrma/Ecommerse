import React, { useState } from "react";
import Navtag from "./Nav";
import Cont from "./Content";
import Options from "./options";
import Details from "./Detail";
import NewArrivals from "./NewArrivals";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div><Navtag /></div>
      <div>
        <Options onOptionClick={handleOptionClick} />
      </div>
      {selectedOption === "New Arrivals" ? (
        <div><NewArrivals /></div>
      ) : (
        <>
          <div><Details /></div>
          <div><Cont /></div>
        </>
      )}
    </>
  );
}

export default App;