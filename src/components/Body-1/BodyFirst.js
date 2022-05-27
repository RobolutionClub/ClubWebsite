import React from 'react'
import"./BodyFirst.css"
export default function Body_1(props) {
  return (
    <>
    <div className="whole slideDown slide-effect">
    <div className='container '>
      <h2>{props.data}</h2>
    </div>
    <div className="container main">
  <div className="row align-items-center">
    <div className="col-md-4 terr">
    <i className="fa-solid fa-robot fa-4x"></i>
    <span className='span-1'>
      We specalize in robot making Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat corporis nisi, recusandae molestiae dignissimos voluptas neque commodi repellat, eveniet fugiat tempora vero dolor, officia nostrum nemo tempore praesentium eaque. Quo.
    </span>
    </div>
    <div className="col-md-4 terr">
    <i className="fa-solid fa-robot fa-4x"></i>
    <span className='span-1'>
      We specalize in workshops Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nisi pariatur similique nulla, ipsam aliquid perferendis recusandae, maiores reprehenderit quo autem, natus saepe necessitatibus maxime porro error? Ipsam, incidunt autem!
    </span>
      

    </div>
    <div className="col-md-4 terr">
    <i className="fa-solid fa-robot fa-4x"></i>
    <span className='span-1'>
      We specalize in workshops Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita maiores. Ducimus totam porro voluptatem repellat quam similique, omnis dicta quo dolorem blanditiis delectus eum, inventore, neque voluptate necessitatibus asperiores?
    </span>
      
    </div>
  </div>
  </div>
  </div>
    
    </>
  )
}
