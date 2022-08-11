import React from "react";
import "./BodyFirst.css";


export default function Body_1(props) {
  
  return (
    <>

    <div className="whole slideDown slide-effect">
        <div className=" ">
          <h2>{props.data}</h2>
        </div>
        <div className="container main">
          <div className="row align-items-center">
            
            <div className="card h-100 container" style={{ width: " 18rem" }}>
              <div className="col-md-4 terr">
                <i className="fa-solid fa-robot fa-4x"></i>
                <div className="span-1">
                  We specalize in robot making Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quaerat corporis
                </div>
              </div>
            </div>
            <div className="card h-100 container" style={{ width: " 18rem" }}>
              <div className="col-md-4 terr">
                <i className="fa-solid fa-robot fa-4x"></i>
                <div className="span-1">
                  We specalize in robot making Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quaerat corporis
                </div>
              </div>
            </div>
            <div className="card h-100 container" style={{ width: " 18rem" }}>
              <div className="col-md-4 terr">
                <i className="fa-solid fa-robot fa-4x"></i>
                <div className="span-1">
                  We specalize in robot making Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quaerat corporis
                </div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
  
     
    </>
  );
}
