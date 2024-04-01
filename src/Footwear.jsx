import React, { useState } from 'react';

function Footwear() {
  const [selectedColor, setSelectedColor] = useState('black');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  let imageUrl;
  switch (selectedColor) {
    case 'black':
      imageUrl = 'https://m.media-amazon.com/images/I/616bv9JLE5L._SY695_.jpg';
      break;
    case 'wine':
      imageUrl = 'https://m.media-amazon.com/images/I/61FNHdi4cxL._SY695_.jpg';
      break;
    case 'ice-blue':
      imageUrl = 'https://m.media-amazon.com/images/I/61zNQXt+1oL._SY695_.jpg';
      break;
    case 'peach':
      imageUrl = 'https://m.media-amazon.com/images/I/61vNUkLiigL._SY695_.jpg';
      break;
    case 'fast-blue':
      imageUrl = 'https://m.media-amazon.com/images/I/61gKzZrGUXL._SY695_.jpg';
      break;
    default:
      imageUrl = 'https://m.media-amazon.com/images/I/616bv9JLE5L._SY695_.jpg';
  }

  return (
    <div className='new-section'>
      <div className='sandle'>
        <img src={imageUrl} alt="" />
      </div>
      <h1 className='tag'>AIRSON AL-5 Slipper</h1>
      <div className='product'>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Material type:</h2>
          <p className="product-detail-content">Synthetic</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Occasion:</h2>
          <p className="product-detail-content">Casual</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Pattern:</h2>
          <p className="product-detail-content">Solid</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Sole Mterial:</h2>
          <p className="product-detail-content">Eva</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Sustainable:</h2>
          <p className="product-detail-content">Regular</p>
        </div>
        <div className='product-detail'>
          <h2 className="product-detail-heading">Type:</h2>
          <p className="product-detail-content">Thong Flip-Flops</p>
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
          <option value="wine">Wine</option>
          <option value="ice-blue">Ice Blue</option>
          <option value="peach">Peach</option>
          <option value="fast-blue">Fast Blue</option>
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

export default Footwear;
