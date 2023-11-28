import React, { useState } from 'react';

const ForSale = (props) => {
    const {item, price, initialStock, updateTotalInCart} = props
    const [inStock, setStock] = useState(initialStock)

    const addToCart = () => {
        if (inStock > 0) {
        setStock(inStock - 1);
        updateTotalInCart((prevTotal) => prevTotal + 1);
        }
    };

    return(
    <div>
        <h2> {item} </h2>
        <p> Price: {price} </p>
        <p> In Stock: {inStock} </p>
        {/* <button onClick={ (events) => setStock(inStock -1)} > Add {item} To Cart! </button>  */}
        {/* IMPORTANT: if i were to add the set in cart in the one above like below - the curly
        brackets are REQUIRED. DON'T FORGET, if its more than one action in a function USE {}, 
        if it's just one, NO CURLY BRACES REQUIRED */}
        {/* <button onClick={ (events) => {setStock(inStock -1); setInCart(inCart + 1);}} > Add {item} To Cart! </button>  */}
        <button onClick={addToCart}>Add {item} To Cart!</button>
        {/* <hr /> */}
    </div>
    )
};
export default ForSale;