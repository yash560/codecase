import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import db from "./firebase";

export default function Contact() {
  let [firstName, setfirstName] = useState([]);
  let [LastName, setLastName] = useState([]);

  let [email, setemail] = useState([]);
  let [contact, setcontact] = useState([]);

  let [country, setcountry] = useState([]);
  let [Whoareyou, setWhoareyou] = useState([]);

  let [message, setmessage] = useState([]);
  let [deletereq, setdel] = useState([]);

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  const sendData = (e) => {
    e.preventDefault();
    db.collection("feedback").add({
      firstName: firstName,
      LastName: LastName,
      email: email,
      contact: contact,
      deletereq: deletereq,
      country: country,
      message: message,
      Whoareyou: Whoareyou,
    });
    setfirstName(" ");
    setLastName(" ");
    setemail(" ");
    setcontact(" ");
    setcountry(" ");
    setWhoareyou(" ");
    setmessage(" ");
    var afterDatarecorded = document.querySelector(".after");
    afterDatarecorded.classList.add("afterRecord");
    afterDatarecorded.innerHTML =
      "Thank You  <br/> <span class='AfterButtonDiv'> <a class='AfterButton' href='https://portfoliowebsite-e935d.web.app/ViewQuestions'  >View Your Input</a> </span";
  };
  return (
    <>
      <div className="ContactMain">
        <Link to="/AboutMe">
          <button className="Navigation">About Me</button>
        </Link>
        <a href="https://codecase.tk">
          <button className="Navigationhome">Home</button>
        </a>
        <a href="https://messenger-e4fc2.web.app/Messenger">
          <i class="fas chatIcon fa-comment-dots">
            <span className="joinDots">Join the chat</span>
          </i>
        </a>
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
                <h2>Contact Me</h2>
                <p>Hop In for a cup of tea, or leave me a message</p>
              </div>
              <form>
                <div class="row">
                  <div class="column">
                    <label for="fname">First Name</label>
                    <input
                      onChange={(e) => {
                        setfirstName(e.target.value);
                      }}
                      value={firstName}
                      className="Contact_input"
                      type="text"
                      required
                      id="fname"
                      name="firstname"
                      placeholder="Your First name.."
                    />
                    <label for="lname">Email Address</label>
                    <input
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      value={email}
                      className="Contact_input"
                      type="text"
                      id="EmailAddress"
                      required
                      name="Email Address"
                      placeholder="Your Email Address.."
                    />
                    <label for="country">Country</label>
                    <input
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      value={country}
                      required
                      placeholder="Your Country.."
                      className="Contact_select"
                      id="country"
                      name="country"
                    ></input>
                  </div>

                  <div class="column">
                    <label for="fname">Last Name</label>
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      value={LastName}
                      className="Contact_input"
                      required
                      type="text"
                      id="fname"
                      name="Lastname"
                      placeholder="Your Last name.."
                    />
                    <label for="lname">Contact Number</label>
                    <input
                      onChange={(e) => {
                        setcontact(e.target.value);
                      }}
                      value={contact}
                      className="Contact_input"
                      type="text"
                      id="ContactNumber"
                      required
                      name="ContactNumber"
                      placeholder="Your Contact Number.."
                    />
                    <label for="What Do You Do">Who Are You</label>
                    <input
                      onChange={(e) => {
                        setWhoareyou(e.target.value);
                      }}
                      value={Whoareyou}
                      className="Contact_select"
                      id="WhatDoYouDo"
                      required
                      placeholder="Student/WorkingProfessional"
                      name="WhatDoYouDo"
                    ></input>
                    <label for="subject">Your Question / Feedback</label>
                    <textarea
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                      value={message}
                      id="subject"
                      name="subject"
                      required
                      placeholder="Just Type it Out.."
                    ></textarea>
                  </div>
                  <input
                    className="Contact_input"
                    type="submit"
                    onClick={sendData}
                    value="Submit"
                  />
                </div>
              </form>
              <Link to="/ViewQuestions">
                <button className="checkbtn">Check Your Input</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
