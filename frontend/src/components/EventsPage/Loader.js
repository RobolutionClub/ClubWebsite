import React from 'react'

export const Loader = (props) => {
  return (
    <div>

    {props.isloading?<div>loading...</div>:null}
    </div>
    
  )
}
