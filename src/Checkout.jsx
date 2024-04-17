import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [billingAddress, setBillingAddress] = useState('');
  const [deliveryAddressError, setDeliveryAddressError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!billingAddress.trim()) {
      setDeliveryAddressError('Please add delivery address.');
      return;
    }

    setDeliveryAddressError('');

    setLoading(true);

    if (paymentMethod === 'cash') {
      setTimeout(() => {
        setLoading(false);
        setPaymentReceived(true);
      }, 2000);
    } else if (paymentMethod === 'online' && stripe && elements) {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          address: {
            line1: billingAddress,
          },
        },
      });

      if (error) {
        console.error(error);
        setLoading(false);
        if (error.code === 'incomplete_number') {
          alert('Please enter a complete card number.');
        } else {
          alert('An error occurred while processing your payment. Please try again later.');
        }
      } else {
        console.log('PaymentMethod:', paymentMethod);
        setLoading(false);
        setPaymentReceived(true);
      }
    }
  };

  return (
    <div className="checkout-container">
      {paymentReceived ? (
        <div className="payment-received-message">
          <p>❤️ Thank you! Your Order has been received. ❤️</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Checkout</h2>
          <div className="delivery-address-section">
            <h4>Delivery Address</h4>
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => {
                setBillingAddress(e.target.value);
                setDeliveryAddressError('');
              }}
            />
            {deliveryAddressError && (
              <p className="error-message red">{deliveryAddressError}</p>
            )}
          </div>
          <div className="payment-method-container">
            <div className="payment-options">
              <h3>Select Payment Method</h3>
              <label>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                />
                Cash on Delivery
              </label>
              <label>
                <input
                  type="radio"
                  value="online"
                  checked={paymentMethod === 'online'}
                  onChange={handlePaymentMethodChange}
                />
                Online Payment
              </label>
            </div>
            {paymentMethod === 'online' && (
              <>
                <div className="card-details-section">
                  <h4>Card details</h4>
                  <div className="card-element-container">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '26px',
                            fontFamily: 'Arial, sans-serif',
                            '::placeholder': {
                              color: '#aab7c4',
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="pay-btn">
                  <button type="submit" disabled={!stripe || loading} className="pay-button">
                    {loading ? 'Processing...' : 'Pay'}
                  </button>
                  {deliveryAddressError && (
                    <p className="error-message red">{deliveryAddressError}</p>
                  )}
                </div>
              </>
            )}
          </div>
          {paymentMethod === 'cash' && (
            <div className="pay-btn">
              <button
                type="button"
                onClick={() => {
                  if (!billingAddress.trim()) {
                    setDeliveryAddressError('Please add delivery address.');
                    return;
                  }
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setPaymentReceived(true);
                  }, 2000);
                }}
                className="pay-button"
              >
                Complete Your Order
              </button>
            </div>
          )}
        </form>
      )}
      <div className="footer">
        <div className="column">
          <h2>Get to Know Us</h2>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Press Releases</h3>
          <h3>Beverly Science</h3>
        </div>
        <div className="column">
          <h2>Connect with Us</h2>
          <h3>Facebook</h3>
          <h3>Twitter</h3>
          <h3>Instagram</h3>
        </div>
        <div className="column">
          <h2>Make Money with Us</h2>
          <h3>Sell on Beverly</h3>
          <h3>Sell under Beverly Accelerator</h3>
          <h3>Protect and Build Your Brand</h3>
          <h3>Beverly Global Selling</h3>
          <h3>Become an Affiliate</h3>
          <h3>Fulfilment by Beverly</h3>
          <h3>Advertise Your Products</h3>
          <h3>Beverly Pay on Merchants</h3>
        </div>
        <div className="column">
          <h2>Let Us Help You</h2>
          <h3>COVID-19 and Beverly</h3>
          <h3>Your Account</h3>
          <h3>Returns Centre</h3>
          <h3>100% Purchase Protection</h3>
          <h3>Beverly App Download</h3>
          <h3>Help</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
