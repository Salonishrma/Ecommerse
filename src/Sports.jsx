import React, { useState } from "react";
function Sports(){
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
  
    const products = [
      {
        id: 1,
        name: "Campus Men's SLAKE Running Shoes",
        image: "https://m.media-amazon.com/images/I/71+dEU7Mx+L._SY695_.jpg",
        price: "₹1469",
        mrp: "₹1945",
        discount: "25% off",
        sizes: ["6UK", "7UK", "8UK", "9UK"],
        colors: {
          White_Grey: "https://m.media-amazon.com/images/I/61yFgbZ-aSL._SY695_.jpg",
          Black: "https://m.media-amazon.com/images/I/61EY64D3HjL._SY695_.jpg"
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
        limitedTimeDeal: "₹1469 with 25% savings"
      },
      {
        id: 2,
        name: "Campus Men's North Plus Running Shoes",
        image: "https://m.media-amazon.com/images/I/616JlGqyoWL._SY695_.jpg",
        price: "₹1,075",
        mrp: "₹1,790",
        discount: "45% off",
        sizes: ["9UK", "10UK"],
        colors: {
          black: "https://m.media-amazon.com/images/I/61NLkoMf2rL._SY695_.jpg",
          grey: "https://m.media-amazon.com/images/I/616JlGqyoWL._SY695_.jpg",
          blue:"https://m.media-amazon.com/images/I/61q+1kg3saL._SY695_.jpg",
          white:"https://m.media-amazon.com/images/I/61BYUJs8HAL._SY695_.jpg"
        },
        details: {
          material: "Polyurethane",
          closureType: "Lace-Up",
          heelType: "Flat",
          waterResistance: "Not Water Resistant",
          soleMaterial: "Phylon",
          style: "Sneaker",
          countryOfOrigin: "India"
        },
        limitedTimeDeal: "₹1,075 with 66% savings"
      },
      
      {
          id: 3,
          name: "Campus Men's Camp Marlon Running Shoes",
          image: "https://m.media-amazon.com/images/I/61n+Ev+hFLL._SY695_.jpg",
          price: "₹975",
          mrp: "₹1,790",
          discount: "75% off",
          sizes: ["7UK", "8UK", "9UK", "10UK"],
          colors: {
            wine:"https://m.media-amazon.com/images/I/61n+Ev+hFLL._SY695_.jpg",
            white: "https://m.media-amazon.com/images/I/61Uy3n50jGL._SY695_.jpg",
            navy: "https://m.media-amazon.com/images/I/61C40nddi7L._SY695_.jpg",
            Black :"https://m.media-amazon.com/images/I/61swUY21t+L._SY695_.jpg"
          },
          details: {
            material: "Rubber",
            closureType: "Lace-Up",
            heelType: "Flat",
            waterResistance: "Not Water Resistant",
            soleMaterial: "Ethylene Vinyl Acetate",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "₹975 with 66% savings"
        },
  
        {
          id: 4,
          name: "Red Tape Sports Walking Shoes for Men ",
          image: "https://m.media-amazon.com/images/I/61zWRRfqMGL._SY695_.jpg",
          price: "₹2,749",
          mrp: "₹3,889",
          discount: "40% off",
          sizes: ["6UK", "8UK", "10UK"],
          colors: {
            WHITE: "https://m.media-amazon.com/images/I/61hrfItCnsL._SY695_.jpg",
            BLACK: "https://m.media-amazon.com/images/I/61yRKjxkAfL._SY695_.jpg",
            BLUE :"https://m.media-amazon.com/images/I/61zWRRfqMGL._SY695_.jpg",
          },
          details: {
            material: "Synthetic",
            closureType: "Lace-Up",
            heelType: "Flat",
            waterResistance: "Not Water Resistant",
            soleMaterial: "EVA+TPR+PAINT",
            style:"walking",
            countryOfOrigin: "Bangladesh"
          },
          limitedTimeDeal: "₹2,749 with 50% savings"
        },
        {
          id: 5,
          name: "Vector X Chaser Kids Football Shoes",
          image: "https://m.media-amazon.com/images/I/61KBKMOfcVL._SY695_.jpg",
          price: "649",
          mrp: "₹789",
          discount: "10% off",
          sizes: ["6UK", "7UK", "8UK"],
          colors: {
            Blue_Black_Green: "https://m.media-amazon.com/images/I/61LMXufzjmL._SY695_.jpg",
            Multicolor :"https://m.media-amazon.com/images/I/71z4nXk0DlL._SX695_.jpg",
            Black_Green :"https://m.media-amazon.com/images/I/51QGohqhnLL._SY695_.jpg",
            White_blue:"https://m.media-amazon.com/images/I/81m7SyrcKxL._SX695_.jpg",
            
          },
          details: {
            material: "Synthetic",
            closureType: "Lace-Up",
            heelType: "Flat",
            waterResistance: "Waterproof",
            soleMaterial: "Faux Leather",
            style:"Football Shoes",
            countryOfOrigin: "India"
          },
          limitedTimeDeal: "6349 with 20% savings"
        },
  
        {
          id: 6,
          name: "Nivia HY-Court 2.0 Badminton Shoe",
          image: "https://m.media-amazon.com/images/I/71uwtcGCLNL._SY695_.jpg",
          price: "₹1299",
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
export default Sports;