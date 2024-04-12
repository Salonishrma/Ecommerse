import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';

function Navtag() {
    const cart = useSelector(state => state.cart);

    const totalItemsInCart = cart.length;

    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">BEVERLY</div>
                <input type="text" placeholder="Search" className="search-bar" />
            </div>
            <div className="center">
                <div className="nav-item">Delivery</div>
                <div className="nav-item">Trade-In</div>
                <div className="nav-item">Pickup</div>
                <div className="nav-item">Stock</div>
            </div>
            <div className="right">
                <Link to="/CartPage" className="add-to-cart-btn">
                    View Cart <br />
                    <span>{totalItemsInCart} {totalItemsInCart === 1 ? 'item' : 'items'}</span>
                </Link>
                <div className="icon notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                </div>
                <div className="icon user">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Navtag;
