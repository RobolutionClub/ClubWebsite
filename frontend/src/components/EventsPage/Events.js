import React from 'react'
import './EventPage.css'
const Events = (props) => {
  const{_id,image,description,name}=props.data
  const ControlClick=()=>{
    console.log(_id)
    props.deleteevent(_id)
  }
  
  return (
    <div>
       {localStorage.getItem("token") ? (
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={ControlClick}
            ></i>
          ) : null}
        <div className="Event-name">
          {name}
        </div>
        <div>
          <center><img src={image} alt="of a person"  className='picture'/></center>
        </div>
        <div className='Event-description'>
          {description }
        </div>
        <div> 
       
        </div>

      

    </div>
  )
}

export default Events