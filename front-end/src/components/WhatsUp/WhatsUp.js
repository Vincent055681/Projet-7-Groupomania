import React from "react";
import "./WhatsUp.scss";

import Avatar from "../UI/Avatar/Avatar";
import WhatsUpForm from "./WhatsUpForm";

const WhatsUp = () => {
  const firstName = "Prénom"
  return (
    <div className="whats_up">
      <Avatar className={"whatsup__avatar"} />
      <WhatsUpForm className={"whatsup__form"} placeholder={`Quoi de neuf, ${firstName} ?`}  />
    </div>
  );
};

export default WhatsUp;
