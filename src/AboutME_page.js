import React from "react";
import { Link } from "react-router-dom";
import "./AboutME_page.css";
function AboutME_page() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  return (
    <div>
      <div className="ContactMain">
        <Link to="/">
          <button className="Navigation">Portfolio</button>
        </Link>
        <a href="https://codecase.tk">
          <button className="Navigationhome">Home</button>
        </a>
        <Link to="/Contact_page">
          <button className="Contact_button">Contact</button>
        </Link>
        <div className=" after "> </div>
        <div className="App">
          <button class="b1" onClick={myFunction}>
            <i class="fas fa-moon"></i>
          </button>
          <span class="myname">
            <p>Yash Jain</p>
          </span>
          <Link to="/">
            <i class="fab fa-buffer"></i>
          </Link>
          <Link to="/Contact_page">
            <i class="fas fa-caret-left"></i>
          </Link>
          <Link to="/">
            <i class="fas fa-caret-right"></i>
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
          <div class="Contact_app_body">
            <div class="Contact_main">
              <div className="Contact_header">
                <h2>About Me</h2>
              </div>
              <form>
                <div class="Aboutrow">
                  <div class="Aboutcolumn">
                    <div className="skillCard">
                      <span className="hoverSkills">Skills</span>
                      <div className="con">
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>HTML</span>
                          </div>
                          <div class="About_small_cards">
                            <span>CSS</span>
                          </div>
                        </div>
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>JAVASCRIPT</span>
                          </div>
                          <div class="About_small_cards">
                            <span>MONGO DB</span>
                          </div>
                        </div>
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>REACT JS</span>
                          </div>
                          <div class="About_small_cards">
                            <span>EXPRESS JS</span>
                          </div>
                        </div>
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>NODE JS</span>
                          </div>
                          <div class="About_small_cards">
                            <span>WORD</span>
                          </div>
                        </div>
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>POWERPOINT</span>
                          </div>
                          <div class="About_small_cards">
                            <span>SKETCH UP</span>
                          </div>
                        </div>
                        <div className="SkillsDiv">
                          <div class="About_small_cards">
                            <span>LOGO DESIGN</span>
                          </div>
                          <div class="About_small_cards">
                            <span>SASS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="Aboutcolumn">
                    <div className="skillCard">
                      <span className="hoverEducation">EDUCATION</span>
                      <div className="con">
                        <div className="educationContaier">
                          <span className="educationHeader">
                            Under-Graduation
                          </span>
                          <br /> Bachelor of Commerce <br />
                          Stream:Computer Application <br />
                          <br />
                          From THE BHOPAL SCHOOL OF SOCIAL SCIENCES
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader"> Schooling </span>
                          <br />
                          St. Xavier's Sr. Sec Co-ed School ,<br /> Bhopal
                          ONGOING
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader">
                            Certificate Courses
                          </span>
                          <br /> Web Designing
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader">
                            Online Courses <br />
                          </span>
                          1.JavaScript <br />
                          2. Bootstrap
                          <br /> 3.Java Core
                          <br /> 4. Graphic-Design <br />
                          5.Logo-Design
                          <br /> 6. Adobe PhotoShop
                          <br /> 7. Hypertext Preprocessor (PHP )<br /> 8. MySQL
                          <br />
                          9. WonderShare Filmora
                          <br />
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader">Self-Learning</span>
                          <br /> 1. 3D Modelling - SketchUp <br />
                          2. WonderShare Filmora
                          <br /> 3. Microsoft Office
                          <br />
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader">
                            Additional Subjects
                          </span>
                          <br /> 1. Relatonal DataBase Management System
                          <br /> 2. Internet And E-Commerce <br />
                          3. Fundamentals Of Computers
                          <br />
                        </div>
                        <div className="educationContaier">
                          <span className="educationHeader">
                            Swayam Courses
                            <br /> (Government Platform)
                          </span>
                          <br /> 1. Data Strucures - CEC <br />
                          2. Programming in Java - NPTEL
                          <br /> 3. The Essence Of leadership - IIMB <br />
                          4. Business Organisation And Management - IGNOU
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutME_page;
