import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ItemContext } from "./ItemContext";

const CatalogRender = () => {
    const [loading, setLoading] = useState ("idle")
    const {state, receiveItemInfoFromServer} = useContext (ItemContext)
    console.log (state)

    useEffect(() => {
        setLoading('loading')
        fetch('/api/all-products?start=0&limit=20')
          .then(res => res.json())
          .then(data => {
            if (data.status !== 200) {
              console.log(data)  
            } else {
                receiveItemInfoFromServer(data.data);
            setLoading('idle')}});
      }, []); 


      if (loading === "loading") {
          return <p>Loading...</p>
      } else {
        
    return (
        <Wrapper>hi
        {/* {state.items.map((item => {
            return(
                    <ProductContainer key={item._id}>
                        <p>{item.name}</p>
                        <ProductImg alt="product" src={item.imageSrc} />
                    </ProductContainer>
            )
        }))} */}
        </Wrapper>
        
    )
    }
}


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ProductContainer = styled.div`
    width: 200px;
    height: 400px;
    
`
const ProductImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    
`
export default CatalogRender;