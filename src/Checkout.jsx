import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';
const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [paymentReceived, setPaymentReceived] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
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
  };

  return (
    <div className="checkout-container">
      
      {paymentReceived ? (
        <div className="payment-received-message">
          <p>❤️ Thank you! Your payment has been received. ❤️</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Checkout</h2>
          <label className="card-details-label">
    Card details
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
</label>

          <div className='pay-btn'>
          <button type="submit" disabled={!stripe || loading} className="pay-button">
            {loading ? 'Processing...' : 'Pay'}
          </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
