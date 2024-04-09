// ProductDetails.js
import React, { useState, useEffect } from 'react';

function ProductDetails({ match }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productId = match.params.productId;
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [match.params.productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default ProductDetails;
