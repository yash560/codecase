import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quescard from "./Quescard";
import "./Checkques.css";
import db from "./firebase";
function Checkques() {
  const [showfeed, setshowfeed] = useState([]);

  useEffect(() => {
    db.collection("feedback").onSnapshot((snap) =>
      setshowfeed(
        snap.docs.map((doc) => ({
          feedid: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
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
        <a href="codecase.tk">
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
            <a href="codecase.tk">
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
        <Link to="/Contactme">
          <i class="fas fa-caret-left"></i>
        </Link>
        <Link to="/Contact_page">
          <i class="fas fa-caret-right"></i>
        </Link>
        <div class="app_body">
          {showfeed[0] ? (
            <>Records </>
          ) : (
            <>
              No Records <br />
              Please Be the first one To give a Feedback
              <br />
              (Press the Left Arrow)
            </>
          )}
          {showfeed.map(
            ({
              feedid,
              data: {
                firstName,
                country,
                deletereq,
                Whoareyou,
                LastName,
                email,
                contact,
                message,
              },
            }) => (
              <Quescard
                feedid={feedid}
                key={feedid}
                firstName={firstName}
                LastName={LastName}
                email={email}
                contact={contact}
                Whoareyou={Whoareyou}
                deletereq={deletereq}
                country={country}
                message={message}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkques;
