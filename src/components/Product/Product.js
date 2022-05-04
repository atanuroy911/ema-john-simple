import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {id, name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt={name} />
            </div>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <div className='product-details'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() =>{
                handleAddToCart(id)
            }} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;