import React, { useContext } from "react";
import { ItemContext } from "../ItemContext";

//styling
import styled from "styled-components";



const CartItems = ({item}) => {

    const {state, addPurchase, removePurchase, clearPurchase} = useContext(ItemContext)

    return (
        <div>
                <React.Fragment key="item._id">
                    <button onClick={() => clearPurchase(item._id)}>Remove</button>
                    <img src={item.imageSrc} alt={item.name}/>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => addPurchase(item._id)}> + </button>
                    <button onClick={() =>removePurchase(item._id)}> - </button>
                    <p>{item.price}</p>
                </React.Fragment>
                

        </div>
    )
}

export default CartItems