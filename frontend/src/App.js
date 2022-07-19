
import './App.css';
import  Homepage from './components/HomePage'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from './components/EventsPage/EventPage';
import Aboutus from './components/About-Us/Aboutus';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<Homepage/>}/>
    <Route  path="/login" element={ <Login/>}/>
    <Route  path="/events" element={ <EventPage/>}/>
    <Route  path="/About" element={ <Aboutus/>}/>

   

   
    </Routes>
    </Router>
 
  </>

  );
}

export default App;
