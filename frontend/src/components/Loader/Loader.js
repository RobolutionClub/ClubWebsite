import React from 'react'
import "./Loader.css"
import loaderpic from './HarmlessGlisteningCarp-size_restricted.gif'

const Loader = (props) => {
  return (
    <div className='Loader'>
  {props.loader?<img src={loaderpic} alt="img" className='loaderpic' />:null}
    </div>
  )
}

export default Loader