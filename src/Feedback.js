import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";

function Feedback() {
  let [firstName, setfirstName] = useState([]);
  let [LastName, setLastName] = useState([]);

  let [email, setemail] = useState([]);
  let [contact, setcontact] = useState([]);

  let [country, setcountry] = useState([]);
  let [Whoareyou, setWhoareyou] = useState([]);

  let [message, setmessage] = useState([]);

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  const sendData = (e) => {
    e.preventDefault();
    db.collection("Valuefeedback").add({
      firstName: firstName,
      LastName: LastName,
      email: email,
      contact: contact,
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
      "Thank You  <br/> <span class='AfterButtonDiv'> <a class='AfterButton' href='https://meraaportfolioo.000webhostapp.com/PorfolioWebsite/style.html'  >Home</a> </span";
  };
  return (
    <div>
      <div className="ContactMain">
        z
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
                <h2>Feedback</h2>
                <p>
                  Mistakes should be examined, learned from, and discarded; not
                  dwelled upon and stored
                </p>
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
                    <select
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      value={country}
                      required
                      className="Contact_select"
                      id="country"
                      name="country"
                    >
                      <option value="australia">India</option>
                      <option value="canada">Australia</option>
                      <option value="usa">Afghanistan</option>
                      <option value="usa">USA</option>
                      <option value="australia">Algeria</option>
                      <option value="canada">Argentina</option>
                      <option value="usa">Angola</option>
                      <option value="usa">Antigua and Barbuda.</option>
                    </select>
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

                    <label for="subject">Feedback</label>
                    <textarea
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                      value={message}
                      id="subject"
                      name="subject"
                      required
                      placeholder="Please Write Your Precious Feedback.."
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
