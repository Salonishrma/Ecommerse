import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navtag from "./Nav";
import Options from "./options";
import NewArrivals from "./NewArrivals";
import Footwear from "./Footwear";
import Men from "./Men";
import Women from "./Women";
import Sale from "./Sale";
import Kids from "./Kids";
import Sports from "./Sports";
import Home from "./Home";
import ProductDetails from "./ ProductDetails";
import { Provider } from 'react-redux';
import store from './Store';
import CartPage from "./CartPage";
import Checkout from "./Checkout";


const stripePromise = loadStripe("pk_test_51P6BppSFz9HEUQnQhWU3JJR69MIvkIzyLfsOKvRRP1ko5tb7tCwgIQxkbnWJgVNCRxo2bQJXtcQxgAKEAGESOUIV00dmIQZynn");

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <div><Navtag /></div>
          <div>
            <Options setSelectedOption={setSelectedOption} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/footwear" element={<Footwear />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkout" element={
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
