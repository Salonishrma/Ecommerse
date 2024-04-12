import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './actions';
import './CartPage.css';


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
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
    <tr key={index}>
        {item.product && (
            <>
                <td><img src={item.product.image} alt={item.product.title || item.product.name} /></td>
                <td>{item.product.title || item.product.name}</td>
                <td>₹{parseFloat(item.product.price).toFixed(2)}</td>
                <td>{item.product.details ? `Material: ${item.product.details.material}, Style: ${item.product.details.style}, Country: ${item.product.details.countryOfOrigin}` : 'No description'}</td>
                <td>{item.quantity}</td>
                <td><button onClick={() => dispatch(removeFromCart(index))}>Remove Item</button></td>
            </>
        )}
    </tr>
))}

                    </tbody>
                </table>
            )}
            <div className='final'>
                <p>Total Items: {cart.reduce((acc, item) => acc + parseInt(item.quantity), 0)}</p>
                <p>Total Price: ₹{calculateTotalPrice()}</p>
            </div>
        </div>
    );
}

export default CartPage;
