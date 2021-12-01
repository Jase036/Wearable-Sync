import React, { useContext } from "react";
import { ItemContext } from "../ItemContext";

//children
import CartItems from "./CartItems";

//styling
import styled from "styled-components";
import cartItems from "./CartItems";

const ShoppingCart = () => {
  const { state, clearPurchase } = useContext(ItemContext);

  const {cart} = state;

  console.log(state)
  if (cart.length === 0) {
    return (
      <>
        <p>Cart Summery</p>
        <h1>your cart is empty</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Cart Summery</h1>
       {cart.map((item)=>{
           return(<CartItems key={item.id} {...item}/>)
       })}

       <div>
           <p>Cart Total : <span> $0.00 </span></p>
       </div>

       <button onClick={clearPurchase}>
           clear
       </button>

       <button >
           check out
       </button>
      </>
    );
  }
};

export default ShoppingCart;
