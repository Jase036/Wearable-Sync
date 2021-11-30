import React from "react";
import styled from "styled-components";

import wearableLogo from "../assets/wearable-logo.png"
import LoginButton from "./Login/LoginButton";
import NavMenu from "./NavMenu/NavMenu";


//children
import Cart from "./Navbar/Cart";

const Header = () => {

    return (
        <HeaderWrapper>
            <NavMenu />
            <Logo alt="Wearable Sync logo" src={wearableLogo}/>
            <div><LoginButton /> Search <Cart/></div>
            
        </HeaderWrapper>
    )
}

//HeaderWrapper has been set to sticky so that it flows above the page and is always visible
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    background: rgba(220,220,208,0.7);
    color: #fff;
    font-family: var(--font-family);
    position: sticky;
    top:0;
    z-index: 5;
    padding: 5px 50px;
    margin-bottom: -90px;
`
const Logo = styled.img`
    max-width: 200px;
    height: auto;
`
export default Header;