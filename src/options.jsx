import React, { useState } from 'react';
import './options.css';

const Options = ({ setSelectedOption }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMenuChangeHandler = (value) => {
    setSelectedOption(value);
    setShowOptions(false); 
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const menuList = [
    { name: 'New Arrivals', value: 'New Arrivals' },
    { name: 'Footwear', value: 'Footwear' },
    { name: 'Men', value: 'Men' },
    { name: 'Women', value: 'Women' },
    { name: 'Kids', value: 'Kids' },
    { name: 'Sale', value: 'Sale' },
    { name: 'Sports', value: 'Sports' }
  ];

  return (
    <div className="options">
      <button className="filter-button" onClick={toggleOptions}>Filter</button>
      {showOptions && (
        <div className="options-list">
          {menuList.map((menu, key) =>
            <div className="option" onClick={() => handleMenuChangeHandler(menu.value)} key={key}>
              {menu.name}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Options;
