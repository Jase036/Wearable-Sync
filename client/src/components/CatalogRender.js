import React, { useContext } from "react";
import { useParams } from "react-router";
import { ItemContext } from "./ItemContext";
import LoadingSpinner from "./LoadingSpinner";
import { useHistory } from "react-router";


//styling
import styled from "styled-components";


const CatalogRender = () => {
  const { state, paginationIndex, setPaginationIndex} = useContext(ItemContext);
  const type = useParams().type;
  let history = useHistory();
  
  let itemArray = []
  
  if(type === "category" && state.categoryItems.length > 0 ){
    itemArray = state.categoryItems
  } else if (type === "search" && state.searchItems.length > 0) {
    itemArray = state.searchItems
  } else {
    itemArray = state.items
  }


  const handleClick = (ev, item) =>{
    ev.stopPropagation();
  }

  const handleProductDetail = (ev, item) =>{
    ev.stopPropagation();
    history.push(`/item/${item._id}`)
  }

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
          {itemArray.map((item) => {
            return (
              <ProductContainer key={item._id} onClick={(ev) => handleProductDetail(ev, item)}>
                <Para>{item.name}</Para>
                <ProductImg alt="product" src={item.imageSrc} />
                <Overlay>
                  {item.numInStock !==0 ? 
                  <Button onClick={(ev)=>{handleClick(ev,item)}}  >Add to cart</Button> :
                  <p>Out of stock</p>}
                </Overlay>
              </ProductContainer>
            );
          })}
        </Wrapper>
        {!type &&
        <PaginationContainer>
          <PaginationButton onClick={handlePaginationClick}>
            Load More
          </PaginationButton>
        </PaginationContainer>
        }
      </>
    );
  }
};


const Button = styled.div`
z-index: 49;
cursor:pointer;
height:20px;


` 


const Overlay = styled.div`
  position: absolute;
  display:flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 50px;
  z-index: 40;
  transition: 0.5s ease;
  background-color: rgb(211, 186, 177, 0);
  border-radius:20px;
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
  border-radius:20px;

  &:hover div {
    box-shadow: 0 0 5px #ddd;
    background-color: rgb(211, 186, 177, 0.5);
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
