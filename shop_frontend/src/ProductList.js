import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Каталог товаров</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;