import React from 'react'; 
import './Options.css'; 
 
const Options = ({ setSelectedOption }) => { 
 
  const handleMenuChangeHandler = (value) => { 
    console.log("Click Working"); 
    setSelectedOption(value); 
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
      {menuList.map((menu, key) => 
        <div className="option" onClick={() => handleMenuChangeHandler(menu.value)} key={key}> 
          {menu.name} 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default Options;