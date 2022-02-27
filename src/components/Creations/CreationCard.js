import React, { useEffect, useState } from "react";
import "./creations.css";

const CreationCard = ({ desktopImage, name, mobileImage }) => {
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
    <div className="card">
      <img
        src={windowWidth <= 576 ? `${mobileImage}` : `${desktopImage}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

export default CreationCard;
