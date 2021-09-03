import React, { useState } from "react";
import axios from "axios"
import "./WhatsUpForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const WhatsUpForm = ({ className, type, id, name, placeholder, min, max, icon1, icon2 }) => {
  const [inputValue, setInputValue] = useState('')

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const post = {
      author: 'Vincent',
      message: inputValue,
      date: '',

    }

    axios.post('http://localhost:4200/api/post', {
      post
  })
  .then(function (res) {
      console.log(res);
  })
  .catch(function (err) {
      console.log(err);
  });
  }


  return (
    <form className={className} onSubmit={submitHandler}>
      <input className='testt' type='text' id={id} name={name} placeholder={placeholder}  required value={inputValue} onChange={inputHandler} />
      
      <div className="icons_container">
        <FontAwesomeIcon icon={faImages} />
          <button type="submit" className="whatsup__submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
       
    </form>
  );
};

export default WhatsUpForm;
