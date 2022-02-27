import React, { useState, useEffect } from "react";
import "./vr.css";
import vrImageDesktop from "../../images/desktop/image-interactive.jpg";
import vrImageMobile from "../../images/mobile/image-interactive.jpg";

const InteractiveVR = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", watchWidth);
    // cleanup
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <section className="container">
      <div className="interactive-image">
        <img
          src={windowWidth <= 992 ? `${vrImageMobile}` : `${vrImageDesktop}`}
          alt="a man using virtual reality headset"
        />
      </div>
      <div className="interactive-details">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default InteractiveVR;
