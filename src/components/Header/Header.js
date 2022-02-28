import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.svg";
import menu from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <header className="main">
      <nav>
        <div className="container">
          <div className="logo">
            <a href="#0">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <ul className={toggle ? "nav-links active" : "nav-links"}>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jerichobantiquete.netlify.app/"
              >
                About
              </a>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/monciego"
              >
                Support
              </a>
            </li>
          </ul>

          <div className="menu" onClick={toggleHandler}>
            <img src={toggle ? `${close}` : `${menu}`} alt="menu" />
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </main>
    </header>
  );
};

export default Header;
