import React, { useState } from "react";
import './Sale.css'

function Sale() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedColor('');
    setSelectedSize('');
  };

  const handleAddToCart = () => { 
  };

  const handleBuyNow = () => {
  };

  return (
    <div className="sale-page">
      <h1 className="center">Biggest sale of the year</h1>
      <button className='ha'onClick={() => handleProductClick('first-product')}>
        See First Product
      </button><br />
      <button className='ha' onClick={() => handleProductClick('second-product')}>
        See Second Product
      </button> <br />
      <button className='ha' onClick={() => handleProductClick('third-product')}>
        See Third Product
      </button>

      {selectedProduct === 'first-product' && (
        <div className="products">
          <img
            src={
              selectedColor === 'black'
                ? 'https://m.media-amazon.com/images/I/61XVTYMrTVL._SX695_.jpg'
                : selectedColor === 'brown'
                ? 'https://m.media-amazon.com/images/I/61hV6Dl+AWL._SX695_.jpg'
                : 'https://m.media-amazon.com/images/I/61J6ykqhe4L._SX695_.jpg'
            }
            alt="Biggest Sale"
            className="center"
          />
          
          <div className="product-details center">
            <h2>Product details</h2>
            <p>Material type: Polyurethane, Leather, Thermoplastic</p>
            <p>Closure type: Pull-On</p>
            <p>Heel type: No Heel</p>
            <p>Water resistance level: Not Water Resistant</p>
            <p>Sole material: Polyurethane</p>
            <p>Style: Loafers</p>
            <p>Country of Origin: India</p>
            
            <div className="limited-time-deal">
              <p>Limited time deal</p>
              <p>₹469.00 with 77% savings</p>
            </div>

            <h5>Select Color</h5>
            <div>
              <button onClick={() => handleColorChange('black')}>Black</button>
              <button onClick={() => handleColorChange('brown')}>Brown</button>
              <button onClick={() => handleColorChange('grey')}>Grey</button>
            </div>

            <h5>Select Size</h5>
            <div>
              <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
                <option value="">Select Size</option>
                <option value="8uk">8UK</option>
                <option value="9uk">9UK</option>
                <option value="10uk">10UK</option>
              </select>
            </div>

            <div>
              <button className='but' onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div>
              <button className='butt' onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct === 'second-product' && (
        <div className="products">
          <img
            src={
              selectedColor === 'Antic Gold'
                ? 'https://m.media-amazon.com/images/I/716taJcuT5L._SY695_.jpg'
                : selectedColor === 'pink'
                ? 'https://m.media-amazon.com/images/I/611+UAz0rlL._SY695_.jpg'
                : 'https://m.media-amazon.com/images/I/611+UAz0rlL._SY695_.jpg'
            }
            alt="Second Product"
            className="center"
          />
          
          <div className="product-details center">
            <h2>Product details</h2>
            <p>Material type: Faux Leather, Synthetic</p>
            <p>Closure type: Slip On</p>
            <p>Heel type: Flat</p>
            <p>Water resistance level: Not Water Resistant</p>
            <p>Style: Fashion Sandal</p>
            <p>Strap type: Thong</p>

            <div className="limited-time-deal">
              <p>Limited time deal</p>
              <p>₹1,043 with 80% savings</p>
            </div>

            <h5>Select Color</h5>
            <div>
              <button onClick={() => handleColorChange('Antic Gold')}>Antic Gold</button>
              <button onClick={() => handleColorChange('pink')}>Pink</button>
            </div>

            <h5>Select Size</h5>
            <div>
              <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
                <option value="">Select Size</option>
                <option value="4uk">4UK</option>
                <option value="5uk">5UK</option>
                <option value="6uk">6UK</option>
                <option value="7uk">7UK</option>
              </select>
            </div>

            <div>
              <button className='but' onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div>
              <button className='butt' onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      )}

      {selectedProduct === 'third-product' && (
        <div className="products">
          <img
            src={
              selectedColor === 'White'
                ? 'https://m.media-amazon.com/images/I/61slGvL8mDL._SY695_.jpg'
                : selectedColor === 'black'
                ? 'https://m.media-amazon.com/images/I/71yDuNKarkL._SY695_.jpg'
                : 'https://m.media-amazon.com/images/I/61CikYGlEmL._SY695_.jpg'
            }
            alt="Third Product"
            className="center"
          />
          
          <div className="product-details center">
            <h2>Product details</h2>
            <p>Material type: Thermoplastic Elastomers</p>
            <p>Closure type: Buckle</p>
            <p>Heel type: Block Heel</p>
            <p>Water resistance level: Waterproof</p>
            <p>Style: Fashion Sandal</p>
            <p>Strap type: Adjustable Strap</p>
            <p>Country of Origin: India</p>

            <div className="limited-time-deal">
              <p>Limited time deal</p>
              <p>-85% ₹549</p>
            </div>

            <h5>Select Color</h5>
            <div>
              <button onClick={() => handleColorChange('White')}>White</button>
              <button onClick={() => handleColorChange('black')}>Black</button>
              <button onClick={() => handleColorChange('pink')}>Pink</button>
            </div>

            <h5>Select Size</h5>
            <div>
              <select value={selectedSize} onChange={(e) => handleSizeChange(e.target.value)}>
                <option value="">Select Size</option>
                <option value="3uk">3UK</option>
                <option value="4uk">4UK</option>
                <option value="5uk">5UK</option>
                <option value="6uk">6UK</option>
              </select>
            </div>

            <div>
              <button className='but' onClick={handleAddToCart}>Add to Cart</button>
            </div>
            <div>
              <button className='butt' onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sale;
