import React, { useState } from 'react';
import './NewArrivals.css';

function NewArrivals() {
  const [selectedColor, setSelectedColor] = useState('black');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  let imageUrl;
  switch (selectedColor) {
    case 'black':
      imageUrl = 'https://m.media-amazon.com/images/I/51MCWdE1oEL._SY695_.jpg';
      break;
    case 'white':
      imageUrl = 'https://m.media-amazon.com/images/I/51N69oswYbL._SY695_.jpg';
      break;
    case 'green':
      imageUrl = 'https://m.media-amazon.com/images/I/51VLW97zivL._SY695_.jpg';
      break;
    default:
      imageUrl = 'https://m.media-amazon.com/images/I/51MCWdE1oEL._SY695_.jpg';
  }

  return (
    <div className='new-section'>
      <div className='sandle' style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={imageUrl} alt="" />
      </div>
      <h1 className='tag'>Shoetopia Women's Ruhi Heeled Sandal</h1>
      <div className='productk'>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Material type:</h2>
          <p className="product-detail-content">Resin</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Closure type:</h2>
          <p className="product-detail-content">Slip On</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Heel type:</h2>
          <p className="product-detail-content">Block Heel</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Water resistance:</h2>
          <p className="product-detail-content">Not Water Resistant</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Style:</h2>
          <p className="product-detail-content">Classic</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Strap type:</h2>
          <p className="product-detail-content">Ankle Strap</p>
        </div>
      </div>
      <div className='deal-box'>
        <div className='deal-title'>Limited time deal</div>
        <div className='dis'>-75%
        <div className='price'>₹799</div>
        </div>
      </div>
      <div className='color-options'>
        <label htmlFor="color">Color:</label>
        <select id="color" value={selectedColor} onChange={handleColorChange}>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div className='size1'>
        <label htmlFor="size">Size:</label>
        <select id="size">
          <option value="28">28UK</option>
          <option value="30">30UK</option>
          <option value="32">32UK</option>
          <option value="34">34UK</option>
          <option value="38">38UK</option>
        </select>
      </div>
      <div className="buttonk">
        <button className="buttonp">Buy One Click</button>
        <button className="buttonl">Add To Cart</button>
      </div>
    </div>
  );
}

export default NewArrivals;
