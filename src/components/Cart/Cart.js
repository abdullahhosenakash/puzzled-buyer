import React, { useEffect, useState } from 'react';
import RandomProduct from '../RandomProduct/RandomProduct';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';

const Cart = props => {
    const products = props.selectedProduct;
    const [randomProduct, setRandomProduct] = useState([]);
    const newRandomProduct = products[randomProduct];
    const [productName, setProductName] = useState([]);
    const [productObject, setProductObject] = useState([]);

    useEffect(() => {
        if (newRandomProduct !== productObject) {
            setProductObject(newRandomProduct);
        }
        if ((props.count === 3) && (productName.length === 0)) {
            //don't come again
            if (products[0]) {
                setProductName(products[Math.floor(Math.random() * 3)]);
            }
        }
        else if ((props.count === 4) && (productName.length === 1)) {
            //don't come again
            if (products[0]) {
                setProductName(products[Math.floor(Math.random() * 4)]);
            }
        }
        //avoided additional dependency otherwise it calling itself
    }, [newRandomProduct])

    // choose button handler 
    const chooseButton = () => {
        if (products.length === 4) {
            const randomNumber = Math.floor(Math.random() * 4);
            setRandomProduct(randomNumber);
            if (productObject) {
                setProductName(productObject);
            }
        }
        else {
            alert('Please add 4 Items first');
        }
    }

    // remove button handler 
    const removeItems = () => {
        setProductName([]);
        for (let i = 0; i < 4; i++) {
            products.pop();
        }
    }

    // delete button for individual deletion 
    const removeItem = id => {
        const obj = products.find(product => product.id === id);
        const index = products.indexOf(obj);
        products.splice(index, 1);
        setProductName([]);
    }
    return (
        <div className='cart'>
            <h2>Selected Sunglasses</h2>
            {
                products.map(product => <SelectedProduct removeItem={removeItem} key={product.id} product={product}></SelectedProduct>)
            }
            <button onClick={chooseButton} className="choose-button">Choose 1 for Me</button>
            <button onClick={removeItems} className="remove">Choose Again</button>
            <RandomProduct productName={productName.name} productImg={productName.img} price={productName.price}></RandomProduct>
        </div>
    );
};

export default Cart;