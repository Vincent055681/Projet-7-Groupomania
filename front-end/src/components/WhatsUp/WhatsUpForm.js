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
    // const post = {
    //   author_firstname: JSON.parse(localStorage.getItem("user")).user_firstname,
    //   author_lastname: JSON.parse(localStorage.getItem("user")).user_lastname,
    //   message: inputValue,
    //   date_creation: dayjs().format(),
    //   image_url: ""
    // };
    const post = new FormData()
    post.append("author_firstname", JSON.parse(localStorage.getItem("user")).user_firstname);
    post.append("author_lastname", JSON.parse(localStorage.getItem("user")).user_lastname);
    post.append("message", inputValue);
    post.append("date_creation", dayjs().format());
    post.append("image_url",  document.getElementById("image").files[0]);

    // Requête POST axios
    await POST(ENDPOINTS.CREATE_POST, post);

    // this code is just for MVP, it will be upgrade in final version
    // document.location.reload()
  };

  return (
    <form className={className} onSubmit={submitHandler} method="POST" action="/api/post" enctype="multipart/form-data">
      <input className="testt" type="text" id={id} name={name} placeholder={placeholder} required  value={inputValue} onChange={inputHandler}/>
      <div className="icons_container">
        <input type="file" name="image" id="image" className="icons_container__add_file" />
        <label for="image">
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
