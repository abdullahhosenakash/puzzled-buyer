import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';



const Product = props => {
    const { handleAddToCart, product } = props;
    const { name, price, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p className='button-container'><button onClick={handleAddToCart} className="button">Add to Cart<FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faCoffee}></FontAwesomeIcon></button></p>
            </div>
        </div >
    );
};

export default Product;