import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;  
  width:100%;
  height: auto;
  display:flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding-top: 10px;

;
`;

function Footer() {
  return (
    <FooterContainer>
        <p>&copy; 2023 Topolnjak Developer</p>
    </FooterContainer>
  )
}

export default Footer