import React, { useState } from "react";
import './Men.css';
import {useDispatch} from 'react-redux';
import { addToCart } from "./actions";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Men() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "SOLETHREADS Stellar Sneakers",
      image: "https://m.media-amazon.com/images/I/5184XJcvbEL._SY695_.jpg",
      price: "820",
      mrp: "₹11,999",
      discount: "45% off",
      sizes: ["6UK", "7UK", "8UK", "9UK"],
      colors: {
        beige: "https://m.media-amazon.com/images/I/5184XJcvbEL._SY695_.jpg",
        pink: "https://m.media-amazon.com/images/I/518Mthzy7jL._SY695_.jpg"
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
      name: "Campus Mens Syrus Running Shoe",
      image: "https://m.media-amazon.com/images/I/71flVch58cL._SY695_.jpg",
      price: "1,075",
      mrp: "₹1,790",
      discount: "45% off",
      sizes: ["9UK", "10UK"],
      colors: {
        black: "https://m.media-amazon.com/images/I/61HoEdqpIzL._SY695_.jpg",
        grey: "https://m.media-amazon.com/images/I/81Ll9mEruzL._SX695_.jpg",
        blue:"https://m.media-amazon.com/images/I/71flVch58cL._SY695_.jpg"
      },
      details: {
        material: "Polyurethane",
        closureType: "Lace-Up",
        heelType: "Flat",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Rubber",
        style: "Boat Shoes",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹1,075 with 66% savings"
    },
    
    {
        id: 3,
        name: "ASIAN Men's Wonder Sports Running,Walking & Gym Shoes",
        image: "https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg",
        price: "5,175",
        mrp: "₹8,790",
        discount: "75% off",
        sizes: ["7UK", "8UK", "9UK", "10UK"],
        colors: {
          white: "https://m.media-amazon.com/images/I/41mWz2aRrTL._SY695_.jpg",
          navy: "https://m.media-amazon.com/images/I/81Ppvv3MLpL._SY695_.jpg",
          Black :"https://m.media-amazon.com/images/I/61q46ZUUugL._SY695_.jpg"
        },
        details: {
          material: "Rubber",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Ethylene Vinyl Acetate",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹51,75 with 66% savings"
      },

      {
        id: 4,
        name: "ASIAN Men's Tarzan-11 White Casual Sneaker High-Neck Shoes",
        image: "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg",
        price: "749",
        mrp: "₹889",
        discount: "10% off",
        sizes: ["6UK", "8UK", "10UK"],
        colors: {
          WHITE_NAVY: "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg",
          GREY_BLACK: "https://m.media-amazon.com/images/I/81GNU-vMAmL._SY695_.jpg",
          WHITE_LGREY :"https://m.media-amazon.com/images/I/71IyctflYQL._SY695_.jpg",
          WHITE_MUSTARD:"https://m.media-amazon.com/images/I/71JRRh-Bx7L._SY695_.jpg"
        },
        details: {
          material: "Synthetic",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Polyvinyl Chloride",
          style:"walking",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹749 with 10% savings"
      },
      {
        id: 5,
        name: "OHO Bubbles Men Ortho slippers",
        image: "https://m.media-amazon.com/images/I/71zBUjpA9-L._SY695_.jpg",
        price: "349",
        mrp: "₹589",
        discount: "10% off",
        sizes: ["6UK", "7UK", "8UK"],
        colors: {
          Tan: "https://m.media-amazon.com/images/I/71zBUjpA9-L._SY695_.jpg",
          Red  :"https://m.media-amazon.com/images/I/61O8U9W1cfL._SY695_.jpg",
          black :"https://m.media-amazon.com/images/I/710Fo6iIPXL._SY695_.jpg",
          blue:"https://m.media-amazon.com/images/I/81QKegvY4nL._SY695_.jpg",
          olive:"https://m.media-amazon.com/images/I/71wg31NrJJL._SY695_.jpg"
        },
        details: {
          material: "Synthetic",
          closureType: "Slip-on",
          heelType: "Flat",
          waterResistance: "Waterproof",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"casual",
          StrapTypeT:"Thong",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹349 with 20% savings"
      },

      {
        id: 6,
        name: "Nivia HY-Court 2.0 Badminton Shoe",
        image: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
        price: "1299",
        mrp: "₹2589",
        discount: "60% off",
        sizes: ["5UK", "8UK", "10UK"],
        colors: {
          White_Blue: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
          Red_Black  :"https://m.media-amazon.com/images/I/71FgXlqWWiL._SY695_.jpg",
          Whie_Red :"https://m.media-amazon.com/images/I/81f+jwmUwcL._SY695_.jpg",
          Yello_Blue:"https://m.media-amazon.com/images/I/71u3p1pulEL._SY695_.jpg",
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
    dispatch(addToCart(selectedProduct, 1));
    if (selectedProduct) {
      toast.success(`${selectedProduct.name} added to cart successfully!`, {
        position: 'top-right'
      });
    }
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
       <ToastContainer />
    </div>
  );
}

export default Men;
