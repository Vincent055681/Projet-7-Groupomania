import React, { useState } from "react";
import "./WhatsUpForm.scss";

import ENDPOINTS from "../../api/endpoints";
import { POST } from "../../api/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const WhatsUpForm = ({ className, id, name, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const post = {
      author: "Vincent",
      message: inputValue,
      date_creation: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    // Requête POST axios
    await POST(ENDPOINTS.CREATE_POST, post);
  };

  return (
    <form className={className} onSubmit={submitHandler}>
      <input
        className="testt"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required
        value={inputValue}
        onChange={inputHandler}
      />

      <div className="icons_container">
        <FontAwesomeIcon icon={faImages} />
        <button type="submit" className="whatsup__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

export default WhatsUpForm;
