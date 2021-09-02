import React, { useState } from "react";
import "./WhatsUpForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const WhatsUpForm = ({ className, type, id, name, placeholder, min, max, icon1, icon2 }) => {

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  

  const [inputValue, setInputValue] = useState('')

  return (
    <form className={className}>
      <input className='testt' type='text' id={id} name={name} placeholder={placeholder}  required value={inputValue} onChange={inputHandler} />
      
      <div className="icons_container">
        <FontAwesomeIcon icon={faImages} />
          <button type="submit" className="whatsup__submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
       
    </form>
  );
};

export default WhatsUpForm;
