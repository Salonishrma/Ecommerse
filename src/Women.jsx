import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addToCart } from "./actions";

function Women() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "FASHIMO Casual Boots for Women and Girl's Parent",
      image: "https://m.media-amazon.com/images/I/71dvCDw3RmL._SY695_.jpg",
      price: "820",
      mrp: "₹1,999",
      discount: "45% off",
      sizes: ["3UK", "4UK", "5UK", "6UK"],
      colors: {
        pink: "https://m.media-amazon.com/images/I/71dvCDw3RmL._SY695_.jpg",
        Light_Pista: "https://m.media-amazon.com/images/I/71gnyArK6sL._SY695_.jpg",
        Black:"https://m.media-amazon.com/images/I/71u1YXj6NQL._SY695_.jpg",
        sky:"https://m.media-amazon.com/images/I/71ebL7gl0PL._SY695_.jpg"
      },
      details: {
        material: "Synthetic",
        closureType: "Lace-Up",
        heelType: "Block Heel",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Rubber",
        style: "Closed Toe",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹820.00 with 77% savings"
    },
    {
      id: 2,
      name: "Bhogati Fashion Jutti for Ethnic Shoes ",
      image: "https://m.media-amazon.com/images/I/714x1m4UVBL._SY695_.jpg",
      price: "775",
      mrp: "₹990",
      discount: "25% off",
      sizes: ["3UK","4UK","5UK", "6UK"],
      colors: {
        Cream: "https://m.media-amazon.com/images/I/6117eH2iKkL._SY695_.jpg",
        Black: "https://m.media-amazon.com/images/I/61Y5IjffQWL._SY695_.jpg",
        Blue:"https://m.media-amazon.com/images/I/714x1m4UVBL._SY695_.jpg",
        Silver:"https://m.media-amazon.com/images/I/71p4pNDek3L._SY695_.jpg"
      },
      details: {
        material: "Faux Leather, Polyvinyl Chloride",
        closureType: "Pull-On",
        heelType: "Flat",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Faux Leather, Polyvinyl Chloride",
        style: "Mooti cach",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹775 with 66% savings"
    },
    
    {
        id: 3,
        name: "Double Cut Heeled Sandals Square Toe Sandals ",
        image: "https://m.media-amazon.com/images/I/51vLJbdLGNL._SY695_.jpg",
        price: "575",
        mrp: "₹879",
        discount: "35% off",
        sizes: ["3UK", "4UK", "5UK", "6UK"],
        colors: {
          white: "https://m.media-amazon.com/images/I/51pvaiaQmqL._SY695_.jpg",
          Beige: "https://m.media-amazon.com/images/I/51vLJbdLGNL._SY695_.jpg",
          Black :"https://m.media-amazon.com/images/I/616678-XLPL._SY695_.jpg"
        },
        details: {
          material: "Faux Leather",
          closureType: "Fashion Sandal",
          heelType: "Block Heel",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Polyurethane",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹575 with 16% savings"
      },

      {
        id: 4,
        name: "Smart & Sleek Women's Sequins Block Heels ",
        image: "https://m.media-amazon.com/images/I/61BqoqiAFWL._SY695_.jpg",
        price: "749",
        mrp: "₹889",
        discount: "10% off",
        sizes: ["6UK", "8UK", "10UK"],
        colors: {
          Silver: "https://m.media-amazon.com/images/I/615U91N5l7L._SY695_.jpg",
          Gold: "https://m.media-amazon.com/images/I/61BqoqiAFWL._SY695_.jpg",
          Sultan :"https://m.media-amazon.com/images/I/61Fso5OSukL._SY695_.jpg",
        },
        details: {
          material: "Faux Leather",
          closureType: "Slip-on",
          heelType: "Blok Heel ",
          waterResistance: "Water Resistant",
          soleMaterial: "Polyvinyl Chloride",
          style:"Fashion Sandal",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹749 with 10% savings"
      },
      {
        id: 5,
        name: "DIPYO Fancy Wedding Embroidery Wedges Heel",
        image: "https://m.media-amazon.com/images/I/71TosHwyk2L._SY695_.jpg",
        price: "849",
        mrp: "₹1,289",
        discount: "10% off",
        sizes: ["3UK", "4UK", "5UK"],
        colors: {
          pink:"https://m.media-amazon.com/images/I/71TosHwyk2L._SY695_.jpg",
          golden:"https://m.media-amazon.com/images/I/71L7EZaCDaL._SY695_.jpg"
        },
        details: {
          material: "Polyvinyl Chloride",
          closureType: "Boa",
          heelType: "Wedge Heel",
          waterResistance: "Waterproof",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"Wedge",
          StrapTypeT:"Thong",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹849 with 40% savings"
      },

      {
        id: 6,
        name: "Women's Party-wear Designer Wedding Slip-on ",
        image: "https://m.media-amazon.com/images/I/51MYkpKpWDL._SY695_.jpg",
        price: "1299",
        mrp: "₹2589",
        discount: "60% off",
        sizes: ["6UK", "7UK", "8UK"],
        colors: {
          Peach: "https://m.media-amazon.com/images/I/51kn4T0o7GL._SY695_.jpg",
          Grey  :"https://m.media-amazon.com/images/I/51MYkpKpWDL._SY695_.jpg",
          Copper :"https://m.media-amazon.com/images/I/51fIh2ZZe2L._SY695_.jpg",
          Black:"https://m.media-amazon.com/images/I/51vuEny3BZL._SY695_.jpg",
        },
        details: {
          material: "Ethylene Vinyl Acetate",
          closureType: "Lace-up",
          heelType: "Flat",
          waterResistance: "not water resistance",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"HY-Court 2.0 Badminton Shoe",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹1299 with 60% savings"
      }
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

export default Women;
