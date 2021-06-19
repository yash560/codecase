import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PortFolio_Catagories from "./PortFolio_Catagories";
import Webite_Designs from "./Webite_Designs";
import Graphic_Design from "./Graphic_Design";
import Models from "./Models";
import Mobile_Application from "./Mobile_Application";
import Web_Development from "./Web_Development";
import App from "./App";
import Contact from "./Contact";
import "./App.css";
import AboutME_page from "./AboutME_page";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Contact_page from "./Contact_page";
import Feedback from "./Feedback";
import Checkques from "./Checkques";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {" "}
      <Switch>
        {" "}
        <Route exact path="/AboutMe">
          <AboutME_page />
        </Route>
        <Route exact path="/Contact_page">
          <Contact_page />
        </Route>
        <Route exact path="/Feedback">
          <Feedback />
        </Route>{" "}
        <Route exact path="/ViewQuestions">
          <Checkques />
        </Route>
        <Route exact path="/ContactMe">
          <Contact />
        </Route>
        <Route exact path="/Webite-Designs">
          <Webite_Designs />
        </Route>
        <Route exact path="/Graphic-Design">
          <Graphic_Design />
        </Route>
        <Route exact path="/3-D-Models">
          <Models />
        </Route>
        <Route exact path="/Mobile-Application">
          <Mobile_Application />
        </Route>
        <Route exact path="/Web-Development">
          <Web_Development />
        </Route>
        <Route exact path="/All">
          <App />
        </Route>
        <Route exact path="/">
          <PortFolio_Catagories />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
