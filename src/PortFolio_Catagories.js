import React from "react";
import "./PortFolio_Catagories.css";
import "./Portfolio_card.css";
import "./App.css";
import Catagories_card from "./Catagories_card";
import Portfolio_card from "./Portfolio_card";
import { Link } from "react-router-dom";

export default function PortFolio_Catagories() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  return (
    <div>
      <div className="App">
        <Link to="/AboutMe">
          <button className="Navigation">About Me</button>
        </Link>
        <a href="https://codecase.tk">
          <button className="Navigationhome">Home</button>
        </a>
        <Link to="/Contact_page">
          <button className="Contact_button">Contact</button>
        </Link>
        <button class="b1" onClick={myFunction}>
          <i class="fas fa-moon"></i>
        </button>
        <span class="myname">
          <p>Yash Jain</p>
        </span>
        <Link to="/Contact_page">
          <i class="fas fa-caret-left"></i>
        </Link>
        <Link to="/All">
          <i class="fas fa-caret-right"></i>
        </Link>
        <div class="app_body">
          <div class="port_header">
            <span class="port_header_text">Portfolio</span>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Link to="/All">
                  <Catagories_card Catagorie_Name="All" />
                </Link>
                <Link to="/Web-Development">
                  <Catagories_card Catagorie_Name="Web Development" />
                </Link>
              </div>
              <div className="portfolio_container">
                <Link to="/Graphic-Design">
                  <Catagories_card Catagorie_Name="Graphic Design" />
                </Link>
                <Link to="/Webite-Designs">
                  <Catagories_card Catagorie_Name="Website Designs" />
                </Link>
              </div>
            </div>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Link to="/3-D-Models">
                  <Catagories_card Catagorie_Name="3-D Models" />
                </Link>
                <Link to="/Mobile-Application">
                  <Catagories_card Catagorie_Name="Mobile Application" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
