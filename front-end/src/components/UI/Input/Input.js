import React, { useState } from "react";
import "./Input.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ className, type, id, name, placeholder, min, max, icon, icon2 }) => {

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const [inputValue, setInputValue] = useState('')

  return (
    <div className={className}>
      <input type={type} id={id} name={name} placeholder={placeholder} minLength={min} maxLength={max} required value={inputValue} onChange={inputHandler} />
      {icon &&
      <div className="icons_container">
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={icon2} />
      </div>
       }
    </div>
  );
};

export default Input;
