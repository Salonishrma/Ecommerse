import React, { useState } from 'react';
import './options.css';
import { Link } from 'react-router-dom';

const Options = ({ setSelectedOption }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMenuChangeHandler = (optionName) => {
    setSelectedOption(optionName);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const menuList = [
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Footwear', path: '/footwear' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
    { name: 'Sale', path: '/sale' },
    { name: 'Sports', path: '/sports' }
  ];

  return (
    <div className="options">
      <button className="filter-button" onClick={toggleOptions}>Filter</button>
      {showOptions && (
        <div className="options-list">
          {menuList.map((menu, key) =>
            <Link to={menu.path} key={key} onClick={() => handleMenuChangeHandler(menu.name)}>
              <div className="option">
                {menu.name}
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Options;
