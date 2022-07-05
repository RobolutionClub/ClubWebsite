import React from "react";
import "./Footer.css";
import "./responsive.css";
import img from "../Navbar/robolution.png";
import insta from "../Footer/instagram.png";
import facebook from "../Footer/facebook.png";
import linkedin from "../Footer/linkedin.png";
import twitter from "../Footer/twitter.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row align-items-center">
          <div className="col">
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
          <div className="col-lg-2 ">
            <div className="con">
              <ul className="navbar-nav footer-ul">
                <li className="footer-li">
                  <a href="/" className="nav-link ">
                    Contact Us
                  </a>
                </li>
                <li className="footer-li">
                  <a href="/" className="nav-link ">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col image-toru">
            
              <a href="/">
                <img className="roboimg-1" src={img} alt="nil" />
              </a>
            
          </div>
          <div className="copyright">
          ©2022 Robolution Club of BIT
          </div>
        </div>
      </div>
    </footer>
  );
}
