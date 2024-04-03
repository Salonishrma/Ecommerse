import React, { useState } from 'react';
import './Men.css';

function Footwear() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Marc Loire Women's Fashion Sandal",
      image: "https://m.media-amazon.com/images/I/51dku390cnL._SY695_.jpg",
      price: "₹883",
      mrp: "₹2399",
      discount: "75% off",
      sizes: ["6UK", "7UK", "8UK", "9UK"],
      colors: {
        gold: "https://m.media-amazon.com/images/I/61+R+UScP3L._SY695_.jpg",
        copper:"https://m.media-amazon.com/images/I/61naZhbQjNL._SY695_.jpg",
        black: "https://m.media-amazon.com/images/I/51dku390cnL._SY695_.jpg"
      },
      details: {
        material: "Synthetic",
        closureType: "Block heel",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Polyurethane",
        style: "Buckle",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹883.00 with 77% savings"
    },
    {
      id: 2,
      name: "TWINS SHOE Women's Comfortable",
      image: "https://m.media-amazon.com/images/I/61UgdYj0UtL._SY695_.jpg",
      price: "₹1320",
      mrp: "₹1599",
      discount: "15% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        Grey:"https://m.media-amazon.com/images/I/61vg7GvLesL._SY695_.jpg",
        Copper: "https://m.media-amazon.com/images/I/61cOF3SkODL._SY695_.jpg",
        Golden :"https://m.media-amazon.com/images/I/61OJY9YlF8L._SY695_.jpg",
        Off_Grey:"https://m.media-amazon.com/images/I/61-Wxt4SaGL._SY695_.jpg"
      },
      details: {
        material: "Synthetic",
        closureType: "Slip-on",
        heelType: "Block Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Polyurethane",
        style: "Sneakers",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹1320.00 with 77% savings"
    },
    {
      id: 3,
      name: "Marc Loire Women's Ethnic Slip On",
      image: "https://m.media-amazon.com/images/I/61jKs+9SL7L._SY695_.jpg",
      price: "₹620",
      mrp: "₹799",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        Golden:"https://m.media-amazon.com/images/I/61jKs+9SL7L._SY695_.jpg",
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
      name: "purosoft EVA Light Weight Comfortable Floater For Men's",
      image: "https://m.media-amazon.com/images/I/61jYI297EtL._SY695_.jpg",
      price: "₹349",
      mrp: "₹489",
      discount: "25% off",
      sizes: ["6UK", "8UK", "9UK", "10UK"],
      colors: {
        black:"https://m.media-amazon.com/images/I/61jYI297EtL._SY695_.jpg",
        black2:"https://m.media-amazon.com/images/I/713T2H-LwcL._SY695_.jpg",
        black3:"https://m.media-amazon.com/images/I/71qcdh4qFNL._SY695_.jpg"
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
      limitedTimeDeal: "₹349.00 with 17% savings"
    },
    {
      id: 5,
      name: "Doctor Walk® Extra Soft Ortho Slippers",
      image: "https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
      price: "₹299",
      mrp: "₹179",
      discount: "35% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        black:"https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
        Maroon:"https://m.media-amazon.com/images/I/61sMJecQLnL._SY695_.jpg",
        Red:"https://m.media-amazon.com/images/I/613E5lZ3b3L._SY695_.jpg"
      },
      details: {
        material: "Faux Leather",
        closureType: "Slip On ",
        heelType: "No Heel",
        waterResistance: "Water Resistant",
        soleMaterial: "Rubber",
        style: "Flip Flop",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹299.00 with 19% savings"
    },
    {
      id: 6,
      name: "Lustre Flip Flop for Women | Soft Comfortable | Breathable |",
      image: "https://m.media-amazon.com/images/I/71WnqrQJ+UL._SY695_.jpg",
      price: "₹599",
      mrp: "₹799",
      discount: "35% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink:"https://m.media-amazon.com/images/I/71WnqrQJ+UL._SY695_.jpg",
        Sage_green: "https://m.media-amazon.com/images/I/71-XZE5gXjL._SY695_.jpg",
        Aqua:"https://m.media-amazon.com/images/I/71WIiNwz6EL._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Slip On ",
        heelType: "Flat",
        waterResistance: "Water Resistant",
        soleMaterial: "Thermoplastic Rubbe",
        style: "casual",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹599.00 with 35% savings"
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



export default Footwear;
