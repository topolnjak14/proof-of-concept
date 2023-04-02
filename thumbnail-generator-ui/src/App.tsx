import './App.css'
import styled from 'styled-components';
import Resizer from './components/Resizer/Resizer'; 
import NavBar from './components/Home/NavBar';
import Footer from './components/Home/Footer';



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
  padding-top: 2em;

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
          <Footer/>
      </Container>
    </Body>
  )
}

export default App



      
