import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ToRespond.scss";

const ToRespond = () => {
  return (
    <form>
      <input type="text" placeholder="Écrivez un commentaire..." />
      {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
    </form>
  );
};

export default ToRespond;
