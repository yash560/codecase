import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import db from "./firebase";
export default function Contact_page() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  return (
    <>
      <div className="ContactMain">
        <div className=" after "> </div>
        <div className="App">
          <Link to="/AboutMe">
            <button className="Navigation">About Me</button>
          </Link>
          <a href="https://codecase.tk">
            <button className="Navigationhome">Home</button>
          </a>
          <button class="b1" onClick={myFunction}>
            <i class="fas fa-moon"></i>
          </button>
          <span class="myname">
            <p>Yash Jain</p>
          </span>
          <Link to="/">
            <i class="fas fa-caret-left"></i>
          </Link>
          <Link to="/Contactme">
            <i class="fas fa-caret-right"></i>
          </Link>
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
          <div class="Contact_page_app_body">
            <div class="Contact_main">
              <div className="Contact_header">
                <h2>Contact Me</h2>
                <p className="Help_text">Always here to help</p>
              </div>
              <div class="Contact_cards_row">
                <div class="Contact_cards">
                  <i class="fab card_icon fa-wpforms"></i>

                  <span className="contact_card_text">Ask a Question</span>
                  <br />
                  <span className="contact_card_text_answer">
                    Fill your Details in a Form
                  </span>
                  <br />
                  <Link to="/Contactme">
                    <button className="contact_card_button">Click Here</button>
                  </Link>
                </div>
                <div class="Contact_cards">
                  <i class="far card_icon fa-comment-dots"></i>
                  <span className="contact_card_text">Live Chat</span>
                  <br />
                  <span className="contact_card_text_answer">
                    Join the Live Chat with Me
                  </span>
                  <br />
                  <a href="https://messenger-e4fc2.web.app/Messenger">
                    <button className="contact_card_button">Click Here</button>
                  </a>
                </div>
                <div class="Contact_cards">
                  <i class="far card_icon fa-comment-alt"></i>
                  <span className="contact_card_text">Call me Instead </span>
                  <br />
                  <span className="contact_card_text_answer">8770183178</span>
                  <br />
                </div>
              </div>
              <div class="Contact_cards_row">
                <a href="https://www.instagram.com/_yash___jain_/">
                  <div class="Contact_small_cards">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Person"
                      width="96"
                      height="96"
                    />
                    <span>Follow Me</span>
                  </div>
                </a>
                <a href="https://web.whatsapp.com/send?phone=918770183178">
                  <div class="Contact_small_cards">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Person"
                      width="96"
                      height="96"
                    />
                    <span>8770183178</span>
                  </div>
                </a>
                <div class="Contact_small_cards">
                  <i class="far fa-envelope"></i>
                  <span>Yaashjainn@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
