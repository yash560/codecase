import React from "react";
import { Link } from "react-router-dom";
import Portfolio_card from "./Portfolio_card";

function Mobile_Application() {
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
        <Link to="/">
          <i class="fab fa-buffer"></i>
        </Link>
        <div class="parent">
          <i class="fas fa-cog"></i>
          <div class="child">
            <a href="https://codecase.tk">
              <i class="fas fa-home"></i>
            </a>
          </div>
          <div class="child1">
            <a href="https://portfoliowebsite-e935d.web.app/">
              <i class="fas fa-id-card-alt"></i>
            </a>
          </div>
        </div>
        <span class="myname">
          <p>Yash Jain</p>
        </span>
        <div class="app_body">
          <div class="port_header">
            <span class="port_header_text">Applications</span>
            <Link to="/3-D-Models">
              <i class="fas fa-caret-left"></i>
            </Link>
            <Link to="/All">
              <i class="fas fa-caret-right"></i>
            </Link>
            UNDER MAINTAINENCE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Application;
