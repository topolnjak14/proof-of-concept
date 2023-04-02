import React from 'react';
import styled from 'styled-components';
import LoginButton from '../Login/LoginButton';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #bb6b04;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavMenuItem = styled.li`
  margin: 0 10px;
`;

const NavMenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">ThumBox</Logo>
      <NavMenu>
      
              <LoginButton />
      
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
