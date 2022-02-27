import React from "react";
import CreationCard from "./CreationCard";
import "./creations.css";
import { creationData } from "./data";

const Creations = () => {
  return (
    <section className="creations container">
      <header>
        <h3>our creations</h3>
        <button>see all</button>
      </header>
      <div className="cards">
        {creationData.map((creationCard) => {
          return <CreationCard key={creationCard.id} {...creationCard} />;
        })}
      </div>
    </section>
  );
};

export default Creations;
