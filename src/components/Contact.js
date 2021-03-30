import React from "react";
import "./Contact.css";


//const img =
//  "https://img2.freepng.fr/20180203/egq/kisspng-pac-man-party-worlds-biggest-pac-man-ghosts-pac-man-ghost-png-clipart-5a7561dd869aa1.6524795115176422055513.jpg";

export default function Contact({contactName}) {
  const cleanName = contactName.firstName.toLowerCase();
const status = Boolean(Math.round(Math.random()));
  return (
    <div className="Contact">
      <img className="avatar" src={`/img/${cleanName}.jpg`} alt="" />
      <div>
        <h3 className="name">{contactName.firstName} {contactName.lastName} </h3>
        <div className="status">
          <div className={status ? "status-online" : "status-offline"}></div>
          <p className="status-text">{status ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}