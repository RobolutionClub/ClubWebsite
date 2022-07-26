import React from 'react'

const Card = (props) => {
  return (
    
    <div className="col-md-4">
    <div class="card modifications h-100" style={{width: "18rem"}}>
      <img src={props.photo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <h4 class="card-post">{props.post}</h4>

      
      </div>
      </div>
      
    
  </div>
  
  )
}

export default Card