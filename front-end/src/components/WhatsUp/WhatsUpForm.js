import React, { useState, useEffect } from "react";
import "./WhatsUpForm.scss";

import ENDPOINTS from "../../api/endpoints";
import { POST } from "../../api/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import dayjs from "dayjs";

const WhatsUpForm = ({ className, id, name, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const [imageAdded, setImageAdded] = useState(false);
  const [imageName, setImageName] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const post = new FormData();
    post.append(
      "author_firstname",
      JSON.parse(localStorage.getItem("user")).user_firstname
    );
    post.append(
      "author_lastname",
      JSON.parse(localStorage.getItem("user")).user_lastname
    );
    post.append("message", inputValue);
    post.append("date_creation", dayjs().format());
    post.append("image", document.getElementById("image").files[0]);
    post.append("user_id", JSON.parse(localStorage.getItem("user")).user_id);

    console.log("0");
    // Requête POST axios
    const res = await POST(ENDPOINTS.CREATE_POST, post);
    console.log(res);
      console.log("1");
    // this code is just for MVP, it will be upgrade in final version
    document.location.reload();
    console.log("2");

  };


    const imageAddedToPost = (e) => {
      setImageName(e.target.value.slice(12));
      setImageAdded(true);
    };


  return (
    <form
      className={className}
      onSubmit={submitHandler}
      method="POST"
      action="/api/post"
      enctype="multipart/form-data"
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
          name="image"
          id="image"
          className="icons_container__add_file"
          onInput={imageAddedToPost}
        />
        <div className="image_name">{imageName}</div>
        <label for="image">
          <FontAwesomeIcon icon={faImages} color={imageAdded && "#f57251"} />
        </label>
        <button type="submit" className="icons_container__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

export default WhatsUpForm;
