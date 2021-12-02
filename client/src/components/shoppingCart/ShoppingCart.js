import React, { useContext, useState, useEffect } from "react";
import { ItemContext } from "../ItemContext";
import { useHistory } from "react-router-dom";

//children
import CartItems from "./CartItems";

//styling
import styled from "styled-components";

const ShoppingCart = () => {

  let history = useHistory();

  const [cartItems, setCartItems] = useState([]);
  const { state, clearPurchase } = useContext(ItemContext);
  const {cart} = state;

  // useEffect(() => {
  //   let index = cart.length === 0 ? 0 : cart.length - 1;
  //   fetch(`/api/product/${cart[index].product_id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data.data)
  //     setCartItems([...cartItems].push(data.data))
  //   })
  // },[cart])

  useEffect(() => {
    fetch('/api/cart-items/',
    {
      method: 'POST',
      body: JSON.stringify(cart),
      headers: {'Content-Type': 'application/json'}
      })

    .then((res) => res.json())
    .then((data) => {
      console.log(data.data)
      setCartItems(data.data)
      })
    },[cart])
  

  console.log(cartItems)

  // calc subtotal 
  // let subtotal = 0;
  // subtotal += Number(num).toFixed(2) * item.quantity * 100 / 100;


  const checkOutForm = () => {
    history.push("/checkout");
  }
  // console.log(state)
  if (cart.length === 0) {
    return (
      <Wrapper>
        <Title>Cart Summery</Title>
        <h1>your cart is empty</h1>
      </Wrapper>
    );
  } else {


    return (
      <>
        <Title>Cart Summary</Title>
      {cartItems.map((item)=> {
          return(<CartItems key={item.id} item={item}/>)
      })}

      <div>
          <Para>Cart Total : <Span> $0.00 </Span></Para>
      </div>



      <div>
      <Button onClick={clearPurchase}>
          Clear
      </Button>

      <Checkout onClick={checkOutForm}>
          Check out
      </Checkout>
      </div>
      </>
    );
  }
};

export default ShoppingCart;




const Para = styled.p`
font-size:18px;
padding:20px;
`

const Span = styled.span`
color:#616060;
font-weight:bold;
`

const Button = styled.button`
cursor:pointer;
margin:10px;
font-size:20px;
border-radius:10px;
padding: 15px 10px;
width: 150px;
border:none;
color:#616060;
font-weight:bold;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

transition: 400ms ease;

&:hover{

  background:lightGray;
  box-shadow:none;
}

`
const Checkout = styled(Button)`



&:hover{

  background:var(--sage);

}

`




const Title = styled.h1`
text-align:center;
padding:10px;
color:#616060;`

const Wrapper = styled.div`
display:flex;
flex-direction: column;


`