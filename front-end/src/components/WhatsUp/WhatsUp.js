import React from "react";
import "./WhatsUp.scss";

import Avatar from "../UI/Avatar/Avatar";
import WhatsUpForm from "./WhatsUpForm";

const WhatsUp = () => {
  const userName = JSON.parse(localStorage.getItem("user")).user_firstname;

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
