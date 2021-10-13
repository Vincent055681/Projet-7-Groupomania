import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ToRespond.scss";

import { POST, PATCH } from "../../../../api/axios";
import ENDPOINTS from "../../../../api/endpoints";

const ToRespond = () => {
  // States
  const [commentMessage, setCommentMessage] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();

    const data = {
      author_id: JSON.parse(localStorage.getItem("user")).user_id,
      author_firstname: JSON.parse(localStorage.getItem("user")).user_firstname,
      author_lastname: JSON.parse(localStorage.getItem("user")).user_lastname,
      post_id: 144,
      message: commentMessage,
    };
    const response = await POST(ENDPOINTS.CREATE_COMMENT, data);
    console.log(response);
  };

  const inputHandle = (e) => {
    setCommentMessage(e.target.value);
  };

  return (
    <>
      <hr className="divider" />
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Écrivez un commentaire..."
          onChange={inputHandle}
          value={commentMessage}
          id="input-comment"
        />
        {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
      </form>
    </>
  );
};

export default ToRespond;
