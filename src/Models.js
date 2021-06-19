import React from "react";
import { Link } from "react-router-dom";
import Portfolio_card from "./Portfolio_card";

export default function Models() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  return (
    <div>
      <div className="App">
        z
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
            <span class="port_header_text">3_D Models</span>
            <Link to="/Webite-Designs">
              <i class="fas fa-caret-left"></i>
            </Link>
            <Link to="/Mobile-Application">
              <i class="fas fa-caret-right"></i>
            </Link>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://i.ibb.co/JskJ7MK/villa.png"
                  project_name="Villa "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/2f8383b0-b8ae-4846-83ce-feda81dabb46/Villa-For-32-People"
                />
                <Portfolio_card
                  image="https://i.ibb.co/pKJGj5y/a.png"
                  project_name="Traditiona House "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/8d51608b-24cb-4936-b7b6-ae8995699cfe/Traditional-House"
                />
              </div>
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/522510aa-1d62-4f54-96fd-e7fa1a5eff09"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/0297d02a-4f6c-421f-917e-ad8599902ec4/Simple-House-Exterior"
                />
                <Portfolio_card
                  image="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/f89e3055-9af2-426e-be78-1c65671646ec"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/65895a36-005e-428a-932b-cb198cfdb824/mordern-House2"
                />
              </div>
            </div>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/01f14bad-bc71-4b87-a83c-6a02225182f2"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/f59463e4-89fc-4d18-8c26-9522d7ba8376/Mordern-House"
                />
                <Portfolio_card
                  image="https://i.ibb.co/xYM0VgH/villa.png"
                  project_name="Villa Interior And Exterior "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/ee0da8ec-4d25-4efd-b7f2-c657db09cac5/Mordern-Houses-Exterior-And-Interior"
                />
              </div>
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/a5070eb3-f634-4b85-848d-5817aeb0a1f8"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://3dwarehouse.sketchup.com/model/2db00d0e-f8e7-49cc-b5b5-3ebcf74c2e64/Mordern-House-3"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/sketch2.png"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/sketch2.png"
                />
              </div>
            </div>
            <div className="portfolio_container_main">
              <div className="portfolio_container">
                <Portfolio_card
                  image="https://i.ibb.co/r0L7Mh9/villa3.png"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://i.ibb.co/r0L7Mh9/villa3.png"
                />
                <Portfolio_card
                  image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/villa2.png"
                  project_name="Exterior Design "
                  deslong="This is the exterior design Made using Google Sketch up"
                  createdAt="Nov 2020"
                  techused="Google SketchUp Build;d"
                  opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/villa2.png"
                />
              </div>
              <div className="portfolio_container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
