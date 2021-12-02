import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ItemContext } from "../ItemContext";

//styling
import styled from "styled-components";
import banner from "../../assets/banner1.jpeg";
import Carousel from "react-elastic-carousel";

const Banner = () => {
  const {state} = useContext(ItemContext)

  if (!state.hasLoaded) {
    return <p></p>
  }
  else {
    let featured = [...state.items].sort(() => Math.random() - Math.random()).slice(0,3)

    return (
      <>
        <BkgImg />
        <Intro>
          <Carousel focusOnSelect={true} itemsToShow={1}>
            
              { featured.map(item => {
                return(
                  <div key={item._id}>
                  <Para>
                  <Image alt="featured product" src={item.imageSrc}/>
                  <span>
                  {item.name}
                  </span>
                </Para>
                <ShopLink to={`/item/${item._id}`}>Shop Now</ShopLink>
                </div>
                )
              })
              }
          </Carousel>
        </Intro>
      </>
    );
  }
};

export default Banner;




const ShopLink = styled(Link)`
  margin-top: 30px;
  background: none;
  padding: 20px 20px;
  border-radius: 10px;
  border: solid var(--sage) 2px;
  display: block;
  margin: auto;
  color: var(--sage);
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  width: 150px;
  text-decoration: none;
  text-align: center;

  transition: 400ms ease;

  &:hover{

    background:var(--sage);
    color:var(--cool-gray);

  }
`;

const Para = styled.div`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  color: var(--sage);
  line-height: 1.5;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const Intro = styled.div`
  position: absolute;
  background-color: rgb(121, 128, 138, 0.7);
  top: 200px;
  left: 200px;
  width: 600px;
  padding: 50px;
  border-radius: 10px;
`;

const BkgImg = styled.div`
  margin: 0px;
  background-image: url(${banner});
  min-height: 100vh;
  background-size: cover;
  position: relative;
`;

const Image = styled.img`
  max-width:200px;
  height:auto;
  display:block;
`