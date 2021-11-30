import React, { useContext } from "react";
import styled from "styled-components";
import { ItemContext } from "./ItemContext";
import LoadingSpinner from "./LoadingSpinner"

const CatalogRender = () => {
    const {state, paginationIndex, setPaginationIndex} = useContext (ItemContext)
    
    //We add one to the pagination index, this will cause a fetch and re-render.
    const handlePaginationClick = () => {
        setPaginationIndex(paginationIndex + 1)
    }

    //Our loading spinner component runs until the async fetch in the item context is complete.
    if (!state.hasLoaded) {
        return (
            <Wrapper>
                <LoadingSpinner />
            </Wrapper>
        )
    } else {
        
    return (
        <>
            <Wrapper>
            {state.items.map((item => {
                return(
                        <ProductContainer key={item._id}>
                            <p>{item.name}</p>
                            <ProductImg alt="product" src={item.imageSrc} />
                        </ProductContainer>
                )
            }))}
            </Wrapper>
                <PaginationContainer>    
                    <PaginationButton onClick={handlePaginationClick}>
                        Load More
                    </PaginationButton>
                </PaginationContainer>
        </>
    )
    }
}


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
`
const ProductContainer = styled.div`
    width: 200px;
    height: 400px;
    
`
const ProductImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    
`
const PaginationContainer = styled.div`
    padding: 10px;
    display:flex;
    justify-content: center;
`
const PaginationButton = styled.button`
    padding: 10px;
    border-radius: 10px;
`
export default CatalogRender;