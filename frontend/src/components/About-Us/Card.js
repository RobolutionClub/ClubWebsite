import React from "react";
import "./Aboutus.css";
const Card = (props) => {
  const ControlClick = () => {
    console.log(props.id)
    props.Deletepost(props.id);
  };

  return (
    <div className="col-md-4 ">
      <div className="card hoverimg h-80" style={{ width: "18rem" }}>
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h4 className="card-post">{props.post}</h4>
        </div>
        <div className="socials-board">
          <a href="/">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin fa-2x"></i>
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
