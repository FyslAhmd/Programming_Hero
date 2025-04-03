import React from "react";
import './cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      {cart.map((bottle) => (
        <div className="CartStyle">
          <h3>{bottle.name}</h3>
          <button onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
