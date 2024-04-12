import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './ProductDetails.css';

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [productId]);

    const handleAddToCart = () => {
        dispatch(addToCart(product, quantity));
        toast.success(`${product.title} added to cart successfully!`, {
            position: 'top-right'
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const quantityOptions = [1, 2, 3, 4, 5, 6];

    return (
        <div className='new'>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p className='quant'>Select Quantity: </p>
            <select value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}>
                {quantityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select><br />
            <button className='b' onClick={handleAddToCart}>Add to Cart</button>
            
            <ToastContainer />
        </div>
    );
}

export default ProductDetails;
