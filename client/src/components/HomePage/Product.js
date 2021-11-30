import React, {useContext} from "react";
import { ItemContext } from "../ItemContext";

//styling
import styled from "styled-components";

const {
state: {items},
state: {price},
} = useContext(ItemContext)

console.log(items)

const Product = () =>{


    return(
    <>
    <Divider>
    </Divider>
    <Container>
    
    
    </Container>
    </>
    )
}

export default Product; 


const Container = styled.div`
display:flex;
flex-wrap:wrap;

`

const Divider = styled.div`
background-color:var(--sage);
height:100px;

`