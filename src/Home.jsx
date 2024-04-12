
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Men.css';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Welcome to our store</h1>
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ₹{product.price}</p>
                        <Link to={`/product/${product.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
