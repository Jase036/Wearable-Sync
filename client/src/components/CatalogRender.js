import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CatalogRender = () => {
    const [loading, setLoading] = useState ("idle")
    const [items, setItems] = useState ([])

    useEffect(() => {
        setLoading('loading')
        fetch('/api/all-products')
          .then(res => res.json())
          .then(data => {
            if (data.status !== 200) {
              console.log(data)  
            } else {
            setItems(data.data);
            setLoading('idle')}});
      }, []); 


      if (loading === "loading") {
          return <p>Loading...</p>
      } else {
        
    return (
        <Wrapper>
        {items?.map((item => {
            return(
                    <ProductContainer key={item._id}>
                        <p>{item.name}</p>
                        <ProductImg alt="product" src={item.imageSrc} />
                    </ProductContainer>
            )
        }))}
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