import './App.css'
import Resizer from './components/Resizer/Resizer'; 
import NavBar from './components/Home/NavBar';
import HeroImage from './components/Home/HeroImage';

function App() {

  return (
    <div>
            <NavBar/>
            <HeroImage title={'Hola'} subtitle={'Hola'} buttonText={'Hola'}/>
            <Resizer/>  
    </div>
  )
}

export default App

      
