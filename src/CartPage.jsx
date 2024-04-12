import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './actions'; 
import './CartPage.css';
import { addToCart } from "./actions";

function CartPage() {
    const dispatch = useDispatch(); 
    const cart = useSelector(state => state.cart);

    const calculateItemPrice = (item) => {
        
        if (item && item.product && item.quantity && !isNaN(parseFloat(item.quantity)) && !isNaN(parseFloat(item.product.price))) {
            return parseFloat(item.quantity) * parseFloat(item.product.price);
        } else {
            return 0; 
        }
    };

    const calculateTotalPrice = () => {
       
        if (Array.isArray(cart)) {
            return cart.reduce((total, item) => {
              
                return total + calculateItemPrice(item);
            }, 0).toFixed(2);
        } else {
            return 0; 
        }
    };

    return (
        <div className='new'>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            {item.product && (
                                <>
                                    <img src={item.product.image} alt={item.product.name} />
                                    <h3>{item.product.name}</h3>
                                    <p>Price:  ₹{parseFloat(item.product.price).toFixed(2)}</p>
                                    {item.product.details && (
                                        <p>Description: {item.product.details.material}, {item.product.details.style}, {item.product.details.countryOfOrigin}</p>
                                    )}
                                    <p>Quantity: {item.quantity}</p>
                                    
                                    <button onClick={() => dispatch(removeFromCart(index))}>Remove Item</button>
                                </>
                            )}
                        </div>
                    ))}
                    <div className='final'>
                        <p>Total Items: {cart.reduce((acc, item) => acc + parseInt(item.quantity), 0)}</p>
                        <p>Total Price:  ₹{calculateTotalPrice()}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
