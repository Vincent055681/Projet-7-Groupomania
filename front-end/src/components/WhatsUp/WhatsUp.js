import React from "react";

import "./WhatsUp.scss";

import Avatar from "../UI/Avatar/Avatar";
import WhatsUpForm from "./WhatsUpForm";

const WhatsUp = () => {
  let userName
  // If localstorage is empty, that's mean we aren't connected so go back to the connexion page
  if (JSON.parse(localStorage.getItem("user"))) {
    userName = JSON.parse(localStorage.getItem("user")).user_firstname;
  } else {
    document.location.href = "http://localhost:3000/connexion"
  }

  return (
    <div className="whats_up">
      <Avatar className={"whatsup__avatar"} />
      <WhatsUpForm
        className={"whatsup__form"}
        placeholder={`Quoi de neuf, ${userName} ?`}
      />
    </div>
  );
};

export default WhatsUp;
