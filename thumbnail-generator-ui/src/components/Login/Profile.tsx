import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Container = styled.div`
  width: 6em;
  height: 4em;
  display:flex;
  justify-content:center;
  align-items:center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%
  height: auto;
  border-radius: 5px;
`;

const H2 = styled.h2`
  font-size: 0.7em;
  text-align: center;
  margin-left:5px;
`;

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!user) {
    return null; // Devolver null si no hay un usuario para mostrar
  }

  return (
    isAuthenticated && (
      <Container>
        <Img src={user?.picture} alt={user?.name} />
        <H2>{user?.name}</H2>
      </Container>
    )
  );
};

export default Profile;