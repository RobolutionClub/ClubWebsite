import React from "react";
import "./Footer.css";

import img from "../Navbar/robolution.png";
import insta from "../Footer/instagram.png";
import facebook from "../Footer/facebook.png";
import linkedin from "../Footer/linkedin.png";
import twitter from "../Footer/twitter.png";
export default function Footer() {
  return (
    <div className="height">
      <div class="container text-start">
        <div class="row align-items-start">
          <div class="col">
            <div className="socials">
              <a href="/" className="footer-a">
                <img className="small-png" src={insta} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={facebook} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={linkedin} alt="nil" />
              </a>
              <a href="/" className="footer-a">
                <img className="small-png" src={twitter} alt="nil" />
              </a>
            </div>
          </div>
          <div class="col">
            <div className="main">
              <div className="inner">
                <a href="/" className="footer-a">
                  Contact Us
                </a>
                <a href="/" className="footer-a">
                  Join Us
                </a>
              </div>
              <div className="padding">@2022 Robolution Club of BIT</div>
            </div>
          </div>

          <div class="col size">
            <center>
              <img src={img} alt="" className="roboimg" />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
