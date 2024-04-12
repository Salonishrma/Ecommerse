import React, { useState } from 'react';
import './Men.css';
import {useDispatch } from 'react-redux';
import { addToCart } from "./actions";


function NewArrivals() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "SOLETHREADS Stellar Sneakers",
      image: "https://m.media-amazon.com/images/I/61XtqC-cKcL._SY695_.jpg",
      price: "820",
      mrp: "₹11,999",
      discount: "45% off",
      sizes: ["6UK", "7UK", "8UK", "9UK"],
      colors: {
        white: "https://m.media-amazon.com/images/I/61XtqC-cKcL._SY695_.jpg",
        black: "https://m.media-amazon.com/images/I/61dYfAiJ85L._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Polyurethane",
        style: "Sneakers",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹820.00 with 77% savings"
    },
    {
      id: 2,
      name: "Longwalk Women Casual Sneakers Shoes",
      image: "https://m.media-amazon.com/images/I/71jdvZVGaeL._SY695_.jpg",
      price: "320",
      mrp: "₹599",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink:"https://m.media-amazon.com/images/I/71jdvZVGaeL._SY695_.jpg",
        white: "https://m.media-amazon.com/images/I/618E5ifx7DL._SY695_.jpg",
        black: "https://m.media-amazon.com/images/I/81NH-+qOaiL._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Polyurethane",
        style: "Sneakers",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹820.00 with 77% savings"
    },
    {
      id: 3,
      name: "AMICO Women's & Girls Running & Walking Shoes",
      image: "https://m.media-amazon.com/images/I/610ILkK-gtS._SY695_.jpg",
      price: "620",
      mrp: "₹799",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink:"https://m.media-amazon.com/images/I/610ILkK-gtS._SY695_.jpg",
        white: "https://m.media-amazon.com/images/I/51hRAdDGlbS._SY695_.jpg",
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Rubber",
        style: "Sneakers",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹620.00 with 77% savings"
    },
    {
      id: 4,
      name: "Gangour Sherwani Jutti For Men's",
      image: "https://m.media-amazon.com/images/I/51nZpzunWUL._SY695_.jpg",
      price: "499",
      mrp: "₹799",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink:"https://m.media-amazon.com/images/I/41yI2KpQaYL.jpg",
        white: "https://m.media-amazon.com/images/I/51nZpzunWUL._SY695_.jpg",
        Grey:"https://m.media-amazon.com/images/I/71+LPvmQtRL._SX695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Pull- on ",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Rubber",
        style: "Traditional",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹499.00 with 77% savings"
    },
    {
      id: 5,
      name: "DFR Rajasthani Latest Stylish Slippers for Women and Girls",
      image: "https://m.media-amazon.com/images/I/716aAMQkiYL._SY695_.jpg",
      price: "498",
      mrp: "₹699",
      discount: "35% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        black:"https://m.media-amazon.com/images/I/716aAMQkiYL._SY695_.jpg",
        pink:"https://m.media-amazon.com/images/I/71aiSga6ODL._SY695_.jpg",
        Grey:"https://m.media-amazon.com/images/I/71CiLlPcVfL._SY695_.jpg"
      },
      details: {
        material: "Faux Leather",
        closureType: "Flip- on ",
        heelType: "No Heel",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Rubber",
        style: "Traditional",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹498.00 with 77% savings"
    },
    {
      id: 6,
      name: "Mochi Women's Party Slip On Heel Fashion Sandals",
      image: "https://m.media-amazon.com/images/I/61wcpDsP92L._SY695_.jpg",
      price: "1299",
      mrp: "₹1799",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink:"https://m.media-amazon.com/images/I/61wcpDsP92L._SY695_.jpg",
        Gold: "https://m.media-amazon.com/images/I/71PGpQmGbeS._SY695_.jpg",
        Grey:"https://m.media-amazon.com/images/I/71X8iR2KiqS._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Slip On ",
        heelType: "Kitten  Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Thermoplastic Rubbe",
        style: "Fashion Sandal",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹1299.00 with 77% savings"
    },
  ];
const handleProductClick = (product) => {
  setSelectedProduct(product);
  setSelectedColor('');
  setSelectedSize('');
};

const handleColorChange = (color) => {
  setSelectedColor(color);
};

const handleSizeChange = (size) => {
  setSelectedSize(size);
};

const handleAddToCart = () => { 
  dispatch(addToCart(selectedProduct,1))
};

const handleBuyNow = () => {
 
};

return (
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-discount">M.R.P: <span className="mrp">{product.mrp}</span> ({product.discount})</div>
          <div className="product-delivery">Free delivery by Beverly</div>
          <div className="func-button">
              <button className="click-here" onClick={() => handleProductClick(product)}>Click Here</button>
          </div>
        </div>
        {selectedProduct && selectedProduct.id === product.id && (
          <div className="product-details">
            <h2>Product details</h2>
            <img
              src={selectedColor ? selectedProduct.colors[selectedColor] : selectedProduct.image}
              alt={selectedProduct.name}
              className="center"
            />
            <p>Material type: {selectedProduct.details.material}</p>
            <p>Closure type: {selectedProduct.details.closureType}</p>
            <p>Heel type: {selectedProduct.details.heelType}</p>
            <p>Water resistance level: {selectedProduct.details.waterResistance}</p>
            <p>Sole material: {selectedProduct.details.soleMaterial}</p>
            <p>Style: {selectedProduct.details.style}</p>
            <p>Country of Origin: {selectedProduct.details.countryOfOrigin}</p>
            <div className="limited-time-deal">
              <p>Limited time deal</p>
              <p>{selectedProduct.limitedTimeDeal}</p>
            </div>
            <h5>Select Color</h5>
            <div>
              {Object.keys(selectedProduct.colors).map((color) => (
                <button key={color} onClick={() => handleColorChange(color)}>{color}</button>
              ))}
            </div>
            <h5>Select Size</h5>
            <div>
              <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
                <option value="">Select Size</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div>
              <button className='but' onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div>
              <button className='butt' onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
 );
}



export default NewArrivals;
