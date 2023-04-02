import './App.css'
import Resizer from './components/Resizer/Resizer'; 
import NavBar from './components/Home/NavBar';
import styled from 'styled-components';
/* import Container from '@mui/material/Container'; */


const Body = styled.body`
  font-family: roboto,sans-serif; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
;
`;
 const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5em;

;
`; 

const NavContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
;
`;

function App() {

  return (
    <Body>
      <NavContainer>
          <NavBar/>
      </NavContainer>
      <Container>
          <Resizer/>  
      </Container>
    </Body>
  )
}

export default App



      
