import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './SelectedProduct.css';

//this component is to show selected products
const SelectedProduct = props => {
    const { removeItem, product } = props;
    const { img, name, id } = product;
    return (
        <div className='selected-product'>
            <img src={img} alt="" />
            <span className='name'>{name}</span>
            <span onClick={() => removeItem(id)} className='delete-icon'><FontAwesomeIcon icon={faTrash} /></span>
        </div>
    );
};

export default SelectedProduct;