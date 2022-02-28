import React from "react";
import "./footer.css";
import logo from "../../images/logo.svg";

import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="footer-links">
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#0">Careers</a>
            </li>
            <li>
              <a href="#0">Events</a>
            </li>
            <li>
              <a href="#0">Products</a>
            </li>
            <li>
              <a href="#0">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="socials">
            <div className="social">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="social">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="social">
              <img src={pinterest} alt="pinterest" />
            </div>
            <div className="social">
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <span> © 2021 Loopstudios. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
