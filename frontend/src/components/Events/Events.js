import React from "react";
import "./Events.css";
export default function Events() {
  return (
    <>
    <div className="backgrounde">
    <h1 className="h1-events">Upcoming Events and Workshops</h1>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4">
            <div className="card modifications" style={{ width: "18rem" }}>
              <img src="https://www.lattelrobotics.com/home/wp-content/uploads/2020/06/IMG_6874-1024x768.jpg" className="card-img-top" alt="not found" />
              <div className="card-body">
                <h5 className="card-title">Lorem, ipsum.</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            
            <div className="card modifications" style={{ width: "18rem" }}>
              <img src="https://www.lattelrobotics.com/home/wp-content/uploads/2020/06/IMG_6835-2-1-1024x768.jpg" className="card-img-top" alt="nome" />
              <div className="card-body">
                <h5 className="card-title">Robo Wars</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="card modifications" style={{ width: "18rem" }}>
              <img src="https://www.lattelrobotics.com/home/wp-content/uploads/2020/06/IMG_6835-2-1-1024x768.jpg" className="card-img-top" alt="none" />
              <div className="card-body">
                <h5 className="card-title">Technical 2.0</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
