import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #FF8C00, #FFA500);
  border-radius: 10px;
  color: white;
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;

  
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  background-color: white;
  border: none;
  color: #FF8C00;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
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
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardButton>{buttonText}</CardButton>
    </CardContainer>
  );
};

export default HeroImage;
