import './App.css'
import React, { useState } from 'react';
import ForSale from './components/ForSale'

function App() {
  const [totalInCart, setTotalInCart] = useState(0);

  const [likes, setLikes] = useState(0);
  const supportStore = () => {
    // this is just for now pretending that it's a person logged in preventing them from supporting more than one.
    if (likes == 0){
      setLikes((previousLikes) => previousLikes + 1);
    }
  };

  const clearCart = () => {
    setTotalInCart(0);
    // setStock({
    //   "Air Forces":11,
    //   "Nike Wind Breaker":3
    // });
  }
  // the above is for a shopping cart total items. this is to appear only once on the page
  return (
    <div className='App'>
      <h1>Moms Favorite Thrift Store</h1> 
      {/* <div>
      <h3>Shopping Cart: {totalInCart} Items</h3>
      <hr /> */}
      {/* like in line 7, we have this here with the purpose of appearing in only one space of the page */}
      {/* </div> */}

      <div>
        <ForSale 
        item = "Air Forces" 
        price = {29.99} 
        initialStock = {11}
        updateTotalInCart={setTotalInCart} // Pass a function to update the total count
        />

        <ForSale 
        item = "Nike Wind Breaker" 
        price = {35.99} 
        initialStock = {3} 
        updateTotalInCart={setTotalInCart} // Pass a function to update the total count
        />
      </div>

      <div>
      <hr />
      <h3>Shopping Cart: {totalInCart} Items</h3>
      <button onClick={clearCart}>Clear Cart </button>
      <h3> {likes} Shopper(s) Approve This Store!</h3>
      <button onClick={supportStore}>Support Store?!</button>
      {/* like in line 7, we have this here with the purpose of appearing in only one space of the page */}
      </div>

    </div>
  )
}

export default App
