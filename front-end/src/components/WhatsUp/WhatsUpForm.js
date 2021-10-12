import React, { useState } from "react";
import "./WhatsUpForm.scss";

import ENDPOINTS from "../../api/endpoints";
import { POST } from "../../api/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import dayjs from "dayjs";

const WhatsUpForm = ({ className, id, name, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const post = {
      author_firstname: JSON.parse(localStorage.getItem("user")).user_firstname,
      author_lastname: JSON.parse(localStorage.getItem("user")).user_lastname,
      message: inputValue,
      date_creation: dayjs().format(),
    };

    // Requête POST axios
    await POST(ENDPOINTS.CREATE_POST, post);
  };

  return (
    <form
      className={className}
      onSubmit={submitHandler}
      method="post"
      action="/file"
      encType="multipart/form-data"
    >
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
        <input
          type="file"
          name="send-file"
          id="send-file"
          className="icons_container__add_file"
        />
        <label for="send-file">
          <FontAwesomeIcon icon={faImages} />
        </label>
        <button type="submit" className="icons_container__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

export default WhatsUpForm;
