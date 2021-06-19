import React from "react";
import "./Details.css";
export default function Details({
  image,
  project_name,
  deslong,
  createdAt,
  techused,
  opensrc,
  open,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div onClick={onClose} className="Details">
      <div className="Details_Page">
        <div className="Details_image">
          <img className="Details_image_actual" src={image} />
        </div>

        <p className="details_heading">{project_name}</p>
        <p className="details_des">{deslong}</p>
        {createdAt ? (
          <p className="details_Subheads">
            Created - <span className="Answer_details"> {createdAt} </span>
          </p>
        ) : (
          " "
        )}
        {techused ? (
          <p className="details_Subheads">
            Technologies Used -{" "}
            <span className="Answer_details"> {techused} </span>
          </p>
        ) : (
          " "
        )}

        <a href={opensrc} className="view">
          View Project
        </a>
        <button className="card_button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
