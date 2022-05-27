
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import BodyFirst from './components/Body-1/BodyFirst';
import Manthan from './components/BodyManthan/Manthan';

function App() {
  return (
    <>
  <Navbar/>
  <Slider/>
  <BodyFirst data="What we do at Robolution"/>
  <Manthan/>
  <Footer/>
  </>

  );
}

export default App;
