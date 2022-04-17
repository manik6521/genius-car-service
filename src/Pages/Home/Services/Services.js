import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Services = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>My food.</h2>
            <div className="blog-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Services;