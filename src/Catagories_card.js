import React from "react";
import "./Portfolio_card.css";

export default function Catagories_card({ Catagorie_Name }) {
  return (
    <div>
      <div className="CatagoriesCard">{Catagorie_Name}</div>
    </div>
  );
}
