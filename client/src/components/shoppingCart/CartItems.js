import React, { useContext } from "react";
import { ItemContext } from "../ItemContext";

//styling
import styled from "styled-components";



const CartItems = () => {

    const {state, addPurchase, removePurchase, clearPurchase} = useContext(ItemContext)

    return (
        <div>
            {state.items.filter((item) => item._id === item.product_id).map((item) => {
                return (
                <React.Fragment key="item._id">
                    <button onClick={() => clearPurchase(item._id)}>Remove</button>
                    <img src={item.imageSrc} alt={item.name}/>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => addPurchase(item._id)}> + </button>
                    <button onClick={() =>removePurchase(item._id)}> - </button>
                    <p>{item.price}</p>
                </React.Fragment>
                )
            })}
        </div>
    )
}

export default CartItems