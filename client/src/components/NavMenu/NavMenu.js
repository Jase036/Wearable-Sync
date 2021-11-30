import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    
    
    return (
        <Wrapper>
            <NavMenuLink to='/'>Home</NavMenuLink>
            <NavMenuLink to='/categories'>Categories</NavMenuLink>
        </Wrapper>
    )
}

const NavMenuLink = styled(NavLink)`
    color:#fff;
    font-family: var(--font-family);
    margin-left: 15px;
    text-decoration: none;
    font-size: 25px;
&:hover{
    color: var(--dusty-rose)
}
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

export default NavMenu;