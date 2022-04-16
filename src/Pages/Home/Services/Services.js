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
        <div className='blog-container'>
            {/* <h2>service: {products.length}</h2> */}
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Services;