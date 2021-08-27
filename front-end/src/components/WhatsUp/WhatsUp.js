import React from "react";
import "./WhatsUp.scss";

import Avatar from "../UI/Avatar/Avatar";
import IconAlone from "../UI/IconAlone/IconAlone";
import Input from "../UI/Input/Input";

const WhatsUp = () => {
  const firstName = "Prénom"
  return (
    <div className="whats_up">
      <Avatar />
      <Input className="input_container" placeholder={`Quoi de neuf, ${firstName} ?`}/>
      <IconAlone />
    </div>
  );
};

export default WhatsUp;
