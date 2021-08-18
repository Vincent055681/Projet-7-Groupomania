import React from "react";
import "./input.scss"

const Input = ({ type, id, name, placeholder, min, max }) => {
    
  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        minlength={min}
        maxlength={max}
        required
      />
    </div>
  );
};

export default Input;
