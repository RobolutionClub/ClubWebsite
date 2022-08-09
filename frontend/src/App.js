import "./App.css";
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./components/EventsPage/EventPage";
import Aboutus from "./components/About-Us/Aboutus";
import Loader from "./components/Loader/Loader";
import { useState } from "react";
function App() {
  const [loader, setloader] = useState(false);
  const SetLoader = (isloading) => {
    setloader(isloading);
  };
  return (
    <>
      <Router>
        <Navbar SetLoader={SetLoader} />
        <Loader loader={loader} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/About" element={<Aboutus SetLoader={SetLoader} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
