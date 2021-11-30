import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { LoremIpsum, Avatar, loremIpsum } from "react-lorem-ipsum";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div>
          Wearable Sync 2021<span>&#8482;</span>
        </div>
        <AboutUs to={"/about"}>About us</AboutUs>
        <ContactUs to={"/contact"}>Contact us</ContactUs>
        <ScrollToTop />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* position: sticky;
  bottom: 10px; */
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 10px 0px;
  font-family: var(--font-family);
  font-weight: 700;
  color: white;
  background-color: var(--cool-gray);
`;

const AboutUs = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const ContactUs = styled(NavLink)`
  text-decoration: none;
  color: white;
`;
export default Footer;
