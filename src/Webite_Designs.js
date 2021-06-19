import React from "react";
import { Link } from "react-router-dom";
import Portfolio_card from "./Portfolio_card";

function Webite_Designs() {
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
            <span class="port_header_text">Website Designs</span>
            <Link to="/Graphic-Design">
              <i class="fas fa-caret-left"></i>
            </Link>
            <Link to="/3-D-Models">
              <i class="fas fa-caret-right"></i>
            </Link>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w1.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w1.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w2.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w2.png"
                />
              </div>
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w3.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/w3.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI15.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI15.png"
                />
              </div>
            </div>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI14.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI14.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI13.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI13.png"
                />
              </div>
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI12.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI12.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI11.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI11.png"
                />
              </div>
            </div>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI10.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI10.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI9.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI9.png"
                />
              </div>
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI8.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI8.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI7.png"
                  project_name="Website Designs "
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/UI7.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webite_Designs;
