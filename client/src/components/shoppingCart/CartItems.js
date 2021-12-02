import React, { useContext } from "react";
import { ItemContext } from "../ItemContext";

//styling
import styled from "styled-components";



const CartItems = ({item, cart}) => {
    const {state, addQuantity, removePurchase, lowerQuantity} = useContext(ItemContext)

    let cartInfo = [];
    if(state.hasLoaded) {
        cart.forEach((elem) => {
            if (elem.product_id === item._id) {
                cartInfo.push(elem);
            }
        })
    }

    let disabledLower = cartInfo[0].quantity === 1 ? true : false;
    let disabledAdd = cartInfo[0].quantity < item.numInStock ? false : true;


    return (
        <div>
                <React.Fragment key="item._id">
                    <button onClick={() => removePurchase(cartInfo)}>Remove</button>
                    <StyledImg src={item.imageSrc} alt={item.name}/>
                    <p>{item.name}</p>
                    <p>{cartInfo[0]?.quantity}</p>
                    <button onClick={() => addQuantity(cartInfo)} disabled={disabledAdd} > + </button>
                    <button onClick={() => lowerQuantity(cartInfo)} disabled={disabledLower}> - </button>
                    <p>{item.price}</p>
                </React.Fragment>
                

        </div>
    )
}


const StyledImg = styled.img`
width: 65px;
height: 65px;
mix-blend-mode: multiply;
`;


export default CartItems