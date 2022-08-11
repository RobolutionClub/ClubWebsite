import React from 'react'
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';
import BodyFirst from '../components/Body-1/BodyFirst';
// import Manthan from '../components/BodyManthan/Manthan';
import Events from '../components/Events/Events';
import './Homepage.css'


const Homepage = () => {
  return (
    <>
    <body>
    <Slider/>
    <BodyFirst data="What we do at Robolution"/>
    {/* <Manthan/> */}
    <Events/>
    <Footer/>
    </body>

    
    </>
  )
}

export default Homepage