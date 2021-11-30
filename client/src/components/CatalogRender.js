import React, { useContext } from "react";
import styled from "styled-components";
import { ItemContext } from "./ItemContext";
import LoadingSpinner from "./LoadingSpinner";

const CatalogRender = () => {
  const { state, paginationIndex, setPaginationIndex } =
    useContext(ItemContext);

  //We add one to the pagination index, this will cause a fetch and re-render.
  const handlePaginationClick = () => {
    setPaginationIndex(paginationIndex + 1);
  };

  //Our loading spinner component runs until the async fetch in the item context is complete.
  if (!state.hasLoaded) {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  } else {
    return (
      <>
        <Divider />
        <Wrapper>
          {state.items.map((item) => {
            return (
              <ProductContainer key={item._id}>
                <Para>{item.name}</Para>
                <ProductImg alt="product" src={item.imageSrc} />
                <Overlay>
                  <div>Add to cart</div>
                </Overlay>
              </ProductContainer>
            );
          })}
        </Wrapper>
        <PaginationContainer>
          <PaginationButton onClick={handlePaginationClick}>
            Load More
          </PaginationButton>
        </PaginationContainer>
      </>
    );
  }
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 50px;
  opacity: 0;
  z-index: 99;
  transition: 0.5s ease;
  background-color: var(--dusty-rose);
`;

const Para = styled.p`
  text-align: center;
  font-family: var(--font-family);
`;

const Divider = styled.div`
  background-color: var(--sage);
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;
const ProductContainer = styled.div`
  width: 400px;
  height: 400px;
  padding: 50px;
  position: relative;

  &:hover div {
      opacity: 0.5;
    }
  
`;
const ProductImg = styled.img`
  width: 200px;
  margin: 40px;
  max-height: 200px;
`;
const PaginationContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const PaginationButton = styled.button`
  padding: 10px;
  border-radius: 10px;
`;
export default CatalogRender;
