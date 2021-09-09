import React, { useState } from "react";
import "./Input.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
  className,
  type,
  id,
  name,
  placeholder,
  min,
  max,
  icon1,
  icon2,
  onChange,
}) => {
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className={className}>
      <input
        className="testt"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        required
        value={inputValue}
        onChange={inputHandler}
      />
      {icon1 && (
        <div className="icons_container">
          <FontAwesomeIcon icon={icon1} />
          <FontAwesomeIcon icon={icon2} />
        </div>
      )}
    </div>
  );
};

export default Input;
