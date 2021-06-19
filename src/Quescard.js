import React, { useEffect, useState } from "react";
import "./Checkques.css";
import db from "./firebase";

function Quescard({
  feedid,
  firstName,
  deletereq,
  LastName,
  email,
  contact,
  message,
  country,
  Whoareyou,
}) {
  const [showfeed, setshowfeed] = useState([]);
  const cancelreq = () => {
    let getcontact = prompt(
      "Please Enter Your contact Number Used For Posting this Feedback to Cancel Your Deletion Request"
    );
    if (getcontact === contact) {
      db.collection("feedback").doc(feedid).update({
        deletereq: "",
      });
    } else if (
      getcontact === "Yash" ||
      getcontact === "yash" ||
      getcontact === "Admin"
    ) {
      db.collection("feedback").doc(feedid).delete();
    } else alert("Request Canceled");
  };
  const Generatereq = () => {
    let getcontact = prompt(
      "Please Enter Your contact Number Used For Posting this Feedback to Generate a deletion Request"
    );
    if (getcontact === contact) {
      db.collection("feedback").doc(feedid).update({
        deletereq: "Request Generated",
      });
    } else if (
      getcontact === "Yash" ||
      getcontact === "yash" ||
      getcontact === "Admin"
    ) {
      db.collection("feedback").doc(feedid).delete();
    } else alert("Request Canceled / Invalid Email");
  };
  useEffect(() => {
    db.collection("feedback").onSnapshot((snap) =>
      setshowfeed(
        snap.docs.map((doc) => ({
          feedid: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(showfeed);
  }, []);
  return (
    <div className="quescard">
      <div class="quescard_left">
        Name:{firstName} {LastName} <br /> Country: {country}
      </div>
      <div class="quescard_right">
        Your Email ID :{email}
        <br />
        Your Feedback: {message}
        <div>
          {deletereq[0] ? (
            <div onClick={cancelreq} className="deletereq">
              Cancel <br />
              Request
            </div>
          ) : (
            <div onClick={Generatereq} className="deleteFeed">
              {" "}
              <i className="fas fa-trash"></i> <br />
              Request <br />
              Deletion
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quescard;
