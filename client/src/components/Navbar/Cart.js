import React from "react";
import { ItemContext } from "../ItemContext";
import { BsCart3 } from "react-icons/bs";

//styling
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cart = () =>{

return(
<>
<CartNav to={"/shoppingCart"}><BsCart3 /></CartNav>

    <Total>
    <p>3</p>
    </Total>

</>

)


}

export default Cart

const Total =styled.div`
position:absolute;
right:40px;
background:var(--dusty-rose);
border-radius:50%;
width:10px;
`

const CartNav = styled(Link)`
background:none;
border:none;
cursor:pointer;
position:relative;
text-decoration: none;
color: #fff;
font-size: 25px;
font-weight:700;
`