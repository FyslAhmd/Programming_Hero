import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css";
import { addItemToCart, getItemFromLocal, removeFromLocalStorage } from "../../utility/Math/localStorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const newCartBottles = [];
    const localBottles = getItemFromLocal();
    for(const id of localBottles) {
        const findingBottles = bottles.find(bottle => bottle.id===id);
        if(findingBottles) {
            newCartBottles.push(findingBottles);
        }
    }
    setCart(newCartBottles);
  }, [bottles]);

  const handleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addItemToCart(bottle.id);
  };

  const handleRemoveCart = id => {
    const newCartItemAfterRemove = cart.filter(bottle => bottle.id !== id);
    setCart(newCartItemAfterRemove);
    removeFromLocalStorage(id);
  }

  return (
    <>
      <h3>Cart Item: {cart.length}</h3>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCart={handleCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
