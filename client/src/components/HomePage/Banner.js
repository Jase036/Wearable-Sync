import React, { Component } from "react";

//styling
import styled, { keyframes } from "styled-components";
import banner from "../../assets/banner1.jpeg";
import Carousel from "react-elastic-carousel";

const Banner = () => {
  return (
    <>
      <BkgImg />
      <Intro>
        <Carousel focusOnSelect={true} itemsToShow={1}>
          <div>
            <Para>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Para>
            <Button>Shop Now</Button>
          </div>

          <div>
            <Para>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Para>
            <Button>Shop Now</Button>
          </div>
        </Carousel>
      </Intro>
    </>
  );
};

export default Banner;




const Button = styled.button`
  margin-top: 30px;
  background: none;
  padding: 20px 40px;
  border-radius: 10px;
  border: solid var(--sage) 2px;
  display: block;
  margin: auto;
  color: var(--sage);
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  pointer:cursor;
  cursor: pointer;

  transition: 400ms ease;

  &:hover{

    background:var(--sage);
    color:var(--cool-gray);

  }
`;

const Para = styled.p`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  color: var(--sage);
  line-height: 1.5;
  text-align:center;
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
