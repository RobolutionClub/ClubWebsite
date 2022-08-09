import React from "react";
import "./Aboutus.css";
const Card = (props) => {
  const ControlClick = () => {
    props.Delete(props._id);
  };

  return (
    <div class="col-md-4 ">
      <div class="card hoverimg h-80" style={{ width: "18rem" }}>
        <img src={props.photo} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h4 class="card-post">{props.post}</h4>
        </div>
        <div class="socials-board">
          <a href="/">
            <i class="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          {localStorage.getItem("token") ? (
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={ControlClick}
            ></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
