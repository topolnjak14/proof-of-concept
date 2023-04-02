import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import Profile from '../Login/Profile';

const Nav = styled.nav`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #bb6b04;

  &&:hover {
    color: #bb6b04;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;



const Navbar = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <CircularProgress/> 

  return (
    <Nav>
      <Logo href="/">ThumBox</Logo>
      <Profile/>
      <NavMenu>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
      
      
