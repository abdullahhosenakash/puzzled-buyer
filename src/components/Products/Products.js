import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Products.css';

//here is two part. product and cart
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //click handler
    const handleAddToCart = id => {
        count++;
        setCount(count);
        const selectedProduct = products.find(product => product.id === id);
        const findItem = cart.find(product => product.id === selectedProduct.id);
        if (!findItem) {
            if (cart.length < 4) {
                const newCart = [...cart, selectedProduct];
                setCart(newCart);
            }
            else {
                alert('Maximum 4 items can be choose')
            }
        }
    }
    return (
        <div className='products-and-cart-container'>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id} handleAddToCart={() => handleAddToCart(product.id)} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart count={count} selectedProduct={cart}></Cart>
            </div>
        </div>

    );
};

export default Products;