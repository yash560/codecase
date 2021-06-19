import React, { useState } from "react";
import "./Portfolio_card.css";
import Details from "./Details";
function Portfolio_card({
  image,
  project_name,
  deslong,
  createdAt,
  techused,
  opensrc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  document.addEventListener(".click", () => {
    console.log("hey");
    // setIsOpen(false);
  });
  return (
    <div className="Portfolio_card">
      <div className="imageCards">
        <img className="imagePortfolio" height="155px" src={image} />
      </div>
      <span className="Portfolio_card_Text">{project_name}</span>
      <br />
      <div>
        <button className="card_button" onClick={() => setIsOpen(true)}>
          View Project
        </button>

        <Details
          image={image}
          project_name={project_name}
          deslong={deslong}
          createdAt={createdAt}
          techused={techused}
          opensrc={opensrc}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

export default Portfolio_card;
