import React from 'react';
import "./Product.css"


const Product = ({ product }) => {

    const { name, image, description, price } = product;
    console.log(product)
    return (
        <div>
            <div className="blog">
                <img src={image} alt="" />
                <h2>{name}</h2><br />
                <p>{description}</p> <br />
                <p><span>{price}</span> </p>
                <button className='order'>Order Now</button>
            </div>
        </div>
    );
};

export default Product;