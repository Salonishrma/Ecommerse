import React, { useState } from "react";
import './Men.css';

function Men() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "APTUS Girls Special Occasion Trendy Glitter",
      image: "https://m.media-amazon.com/images/I/61T+siJdvqL._SY695_.jpg",
      price: "₹620",
      mrp: "₹999",
      discount: "45% off",
      sizes: ["2 Years", "2.5 Years", "3 Years", "3.5 Years"],
      colors: {
        pink: "https://m.media-amazon.com/images/I/71CS0W2v7KL._SY695_.jpg",
        while: "https://m.media-amazon.com/images/I/61XMVmvwohL._SY695_.jpg",
        purple:"https://m.media-amazon.com/images/I/71wRQVvpxxL._SY695_.jpg",
        grey:"https://m.media-amazon.com/images/I/61T+siJdvqL._SY695_.jpg"
      },
      details: {
        material: "Synthetic/Sole TPR",
        closureType: "Buckle",
        heelType: "Block Heel",
        waterResistance: "Not Water Resistant",
        soleMaterial: "TPR",
        style: "Ankle Strap",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹620 with 77% savings"
    },
    {
      id: 2,
      name: "Liberty Boys Bastian-2e Sneaker ",
      image: "https://m.media-amazon.com/images/I/61smpQgbcCL._SY695_.jpg",
      price: "₹475",
      mrp: "₹790",
      discount: "25% off",
      sizes: ["1 Years","2 Years","3 Years"],
      colors: {
        Green: "https://m.media-amazon.com/images/I/61smpQgbcCL._SY695_.jpg",
        Blue:"https://m.media-amazon.com/images/I/61oN833U1pL._SY695_.jpg",
        Grey:"https://m.media-amazon.com/images/I/61OPZKzRpnL._SY695_.jpg"
      },
      details: {
        material: "Canvas",
        closureType: "Pull-On",
        heelType: "Flat",
        waterResistance: "Not Water Resistant",
        soleMaterial: "Rubber",
        style: "Sneaker",
        countryOfOrigin: "India"
      },
      limitedTimeDeal: "₹475 with 66% savings"
    },
    
    {
        id: 3,
        name: "Superminis Unisex-baby's Bootie",
        image: "https://m.media-amazon.com/images/I/61NDN5D-0DL._SY695_.jpg",
        price: "₹375",
        mrp: "₹579",
        discount: "35% off",
        sizes: ["6-12 Month", "1 Years", "2 Years"],
        colors: {
          Peach: "https://m.media-amazon.com/images/I/61NDN5D-0DL._SY695_.jpg",
          Sky: "https://m.media-amazon.com/images/I/617B+Ku7K7L._SY695_.jpg",
          Pink :"https://m.media-amazon.com/images/I/61HAN0OFipL._SY695_.jpg"
        },
        details: {
          material: "Fur",
          closureType: "Loop",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Polyurethane",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹375 with 16% savings"
      },

      {
        id: 4,
        name: "Redburg Kids LED Light Up Shoes ",
        image: "https://m.media-amazon.com/images/I/41TZwDwdP5L.jpg",
        price: "₹749",
        mrp: "₹889",
        discount: "10% off",
        sizes: ["3 Years", "3.5 Years", "4 Years", "4.5 Years"],
        colors: {
          Pink: "https://m.media-amazon.com/images/I/41TZwDwdP5L.jpg",
          Red: "https://m.media-amazon.com/images/I/81khHFAHYQL._SY695_.jpg",
        },
        details: {
          material: "Mesh, Ethylene Vinyl Acetate",
          closureType: "Hook & Loop",
          heelType: "Flat ",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"Sneaker",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹749 with 10% savings"
      },
      {
        id: 5,
        name: "Bold N Elegant Girl's Party Soft Velvet ",
        image: "https://m.media-amazon.com/images/I/51Qir2T16RL._SY695_.jpg",
        price: "₹449",
        mrp: "₹689",
        discount: "10% off",
        sizes: ["3 Years","4 Years","5 Years","6 Years"],
        colors: {
          Yellow:"https://m.media-amazon.com/images/I/51Qir2T16RL._SY695_.jpg",
          Pink:"https://m.media-amazon.com/images/I/51Ogw43wvNL._SY695_.jpg",
          Baby_pink:"https://m.media-amazon.com/images/I/51UbkVjQz0L._SY695_.jpg",
          Black:"https://m.media-amazon.com/images/I/416jXHUGbdL._SY695_.jpg"
        },
        details: {
          material: "Velvet",
          closureType: "Slip-On",
          heelType: "Flat",
          waterResistance: "Water proof",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"Classy Modern Girls Ballerina Party Footwear Belly Shoes Sandals",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹449 with 40% savings"
      },

      {
        id: 6,
        name: "SVAAR Slingback Clog Shoes for Boys & Girls ",
        image: "https://m.media-amazon.com/images/I/71V6AtWMsJL._SY695_.jpg",
        price: "₹499",
        mrp: "₹889",
        discount: "40% off",
        sizes: ["2 Years","3 Years","3.5 Years","4 Years",],
        colors: {
          Peanut_Beige: "https://m.media-amazon.com/images/I/71V6AtWMsJL._SY695_.jpg",
          Baby_Pink :"https://m.media-amazon.com/images/I/71r6Y8m1xgL._SY695_.jpg",
          Yellow_Mango :"https://m.media-amazon.com/images/I/71glu9PEI8L._SY695_.jpg",
          Melon_Green:"https://m.media-amazon.com/images/I/71tbYAlKplL._SY695_.jpg",
        },
        details: {
          material: "Ethylene Vinyl Acetate",
          closureType: "Backstrap",
          heelType: "No Heel",
          waterResistance: "Water Proof",
          soleMaterial: "Ethylene Vinyl Acetate",
          style:"Clogs",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹499 with 60% savings"
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

export default Men;
