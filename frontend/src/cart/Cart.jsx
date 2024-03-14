// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
      {cartItems.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
      </ul>
    </div>
  );
};

export default Cart;
