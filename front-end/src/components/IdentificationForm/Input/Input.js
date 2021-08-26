import React from "react";
import "./Input.scss"

const Input = ({ type, id, name, placeholder, min, max }) => {
    
  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        required
      />
    </div>
  );
};

export default Input;
