import { Link } from "react-router-dom";
import "./App.css";
import Portfolio_card from "./Portfolio_card";
function App() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }

  return (
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
      <Link to="/Mobile-Application">
        <i class="fas fa-caret-left"></i>
      </Link>
      <Link to="/Web-Development">
        <i class="fas fa-caret-right"></i>
      </Link>
      <div class="app_body">
        <div class="port_header">
          <span class="port_header_text">Recent Works</span>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://i.ibb.co/4VTq4hK/a.png"
                project_name="DineTime  "
                deslong="Restraunt Application "
                createdAt="May 2020 "
                techused="React Js, Redux, Firebase, Express , Javascript, HTML ,CSS"
                opensrc="https://dinetime-d4fa5.web.app/Login"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://i.ibb.co/0nh8H7B/ss.png"
                project_name="Flight/Hotel/... Reservation  "
                deslong="A full build of Flight / hotel/buses/trains/rooms/holidays Reservation With Fully Styled Components /Responsive design  "
                createdAt="May 2020 "
                techused="React Js, Redux, Firebase, Express , Javascript, HTML ,CSS"
                opensrc="https://fly--with--me.web.app"
              />
              <Portfolio_card
                image="https://i.ibb.co/FnMx8ng/ss.png"
                project_name="Facebook Clone "
                deslong="Create Posts ,Follow People in the Local Community,Video Reels, Create Stories , send Recieve Messages, Save Posts And A lot More"
                createdAt="May 2020 "
                techused="React Js, Redux, Firebase, Express , Javascript, HTML ,CSS"
                opensrc="https://f-a-c-e-b-o-o--k.web.app"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://i.ibb.co/sJsys0Y/linkedin.png"
                project_name="Linkedin Clone  "
                deslong="A full Stack Lnkedin Clone(Under Maintainence)   "
                createdAt="May 2021 "
                techused="React JS , Node JS, Express Js , MongoDB, Html, CSS ,Javascript"
                opensrc=" https://its-linked-in.web.app"
              />
              <Portfolio_card
                image="https://i.ibb.co/tsVXN6N/s.png"
                project_name="Amazon Clone  "
                deslong="A full MERN Stack Build clone Of Amazon.com with additional Use of React Context API , Full Functionalities Working   "
                createdAt="May 2021 "
                techused="React JS , Node JS, Express Js , MongoDB, Html, CSS ,Javascript"
                opensrc="https://its-my-e-commerce-website.web.app/"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/telegram.PNG"
                project_name="TeleGram Clone  "
                deslong="A React JS Build clone Of Telegram"
                createdAt="April 2021 "
                techused="React JS,Html, CSS ,Javascript"
                opensrc="https://slack-ed1dc.web.app/"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/tiktok.PNG"
                project_name="Tik-Tok Clone  "
                deslong="A full MERN Stack Build clone Of Tik-Tok with additional Use of React Context API  "
                createdAt="Jan 2021 "
                techused="React JS , Node JS, Express Js , MongoDB, Html, CSS ,Javascript"
                opensrc="https://mymerntiktokclone.web.app/"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/whatsapp.PNG"
                project_name="WhatsApp Web Clone  "
                deslong="A React JS Build clone Of WhatsApp Web "
                createdAt="May 2021 "
                techused="React JS,Html, CSS ,Javascript, Firebasee"
                opensrc="https://whatsapp-d73a4.web.app/"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/n1.png"
                project_name="Notes Gallery ManageMent System   "
                deslong="A Full Stack Notes Gallery ManageMent System build - Login, Signup, upload Notes , Download Notes , delete Data using PHP and MySQL "
                createdAt="June 2019 "
                techused="PHP, MySQL ,Html, CSS ,Javascript,"
                opensrc="Only Image Available"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/chathere.PNG"
                project_name="Chat Here  "
                deslong="A Simple realtime Chat Application Using react JS  "
                createdAt="May 2021 "
                techused="React JS,Html, CSS ,Javascript, Firebasee"
                opensrc="https://messenger-e4fc2.web.app/Messenger"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/hangouts.PNG"
                project_name="Google Hangouts Clone"
                deslong="A React JS Build clone Of Google Hangouts "
                createdAt="May 2021 "
                techused="React JS,Html, CSS ,Javascript, Firebasee"
                opensrc="https://project-4b4b0.web.app/"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/v1.png"
                project_name="Validtion Form  "
                deslong="JavaScript Form Validation"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/validation/validation.html"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/c2.png"
                project_name="Weight Converter  "
                deslong="Weight Converter Using JavaScript"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/api/calc/CNormal.html"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/c1.png"
                project_name="Temperature Converter  "
                deslong="Temperature Converter Using JavaScript"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/api/calc/calc.html"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/notes.png"
                project_name="Google Keep Clone   "
                deslong="Google Keep Clone   Usng pure JAVASCRIPT , full CRED operations Covered On Notes"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/Keep/keep.html"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/phpcalc.png"
                project_name="PHP Calculator  "
                deslong="Simple Calculator Usng pure PHP"
                createdAt="Jan 2020 "
                techused="PHP, Javascript, HTML ,CSS"
                opensrc="http://localhost/Php_projects/Calculator.php"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/spotify.png"
                project_name="Music Player  "
                deslong="A simple Music Plater Built With Javascript Controls , front End Covered"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/spotify.html"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/shopping.png"
                project_name="E-Commerce Website  "
                deslong="An ecommerce Website , Built With pure Javascript Fully Responsive Design"
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/shopping.html"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/type.png"
                project_name="Exterior  "
                deslong="An Typing Test , Built With pure Javascript , Calculates Speed , Shows Correct And Incorect Words Typed Fully Responsive Design"
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/TypingMasterClone.html"
              />
            </div>
          </div>
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
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://i.ibb.co/r0L7Mh9/villa3.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/sketch2.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
            </div>
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/villa%203a.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/villa3.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/villa2.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
              <Portfolio_card
                image="https://i.ibb.co/r0L7Mh9/villa3.png"
                project_name="Exterior Design "
                deslong="This is the exterior design Made using Google Sketch up"
                createdAt="Nov 2020"
                techused="Google SketchUp Build;d"
                opensrc="Only Image available"
              />
            </div>
          </div>
          <div className="portfolio_container_main">
            <div className="portfolio_container">
              <Portfolio_card
                image="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/a1.png"
                project_name="Application Programming Interface  "
                deslong="A simple Javascript Build which fetch jokes from an API"
                createdAt="Jan 2020 "
                techused="Javascript, HTML ,CSS"
                opensrc="https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/api/index.html"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
