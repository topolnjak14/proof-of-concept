import React from 'react';
import styled from 'styled-components';
import backgroundImg from "../../assets/Banner.jpg";
import '@fontsource/roboto/300.css';

const CardContainer = styled.div`
  width: 70%;
  height: 60vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  color: white;
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    background-color: #00000060;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 5px;  
  }
`;

const Content = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index:1
`;
const CardTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;

const CardSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: white;
  border: none;
  color: #FF8C00;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

interface CardProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const HeroImage: React.FC<CardProps> = ({ title, subtitle, buttonText }) => {
  return (
    <CardContainer>
      <Content>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle style= {{color: "#e8ac52", fontWeight:"bold"}}>{subtitle}</CardSubtitle>
        {/* <CardButton >{buttonText}</CardButton> */}
      </Content>
    </CardContainer>
  );
};

export default HeroImage;

