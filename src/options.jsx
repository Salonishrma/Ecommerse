
import React, { useState } from 'react';
import './Options.css';
import NewArrivals from './NewArrivals'; 

function Options() {
  const [showNewArrivals, setShowNewArrivals] = useState(false);

  const handleNewArrivalsClick = () => {
    setShowNewArrivals(true);
  };

  return (
    <div className="options">
      <div className="option" onClick={handleNewArrivalsClick}>New Arrivals</div>
      {showNewArrivals && <NewArrivals />}
      <div className="option">Footwear</div>
      <div className="option">Men</div>
      <div className="option">Women</div>
      <div className="option">Kids</div>
      <div className="option">Brands</div>
      <div className="option">Sale</div>
    </div>
  );
}

export default Options;
