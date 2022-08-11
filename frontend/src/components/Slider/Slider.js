import React from "react";
import Typical from "react-typical";
import "./Slider.css";
export default function Slider() {
  
  

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          aria-hidden="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img
            src="https://thumbs.dreamstime.com/b/random-numbers-abstract-shapes-digital-tech-innovation-concept-artificial-neural-networks-big-data-150474741.jpg"
            className=" Slider-img"
            alt="not"
          />
          <div className="text">
            <Typical
              steps={["Robolution Club", 3000, "#CreateSomethingNew",2000,]}
              // steps={["", 1000, "wdw", 500]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <button type="button" className="btn btn-outline-light  btn-lg">
            SEE MORE
          </button>
        </div>
        <div className="carousel-item">
          <img
            className="Slider-img-2"
            src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
            alt="..."
          />
          <button type="button" className="btn btn-outline-light  btn-lg">
            SEE MORE
          </button>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
