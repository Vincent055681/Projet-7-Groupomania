import React from "react";
import "./Input.scss";

const Input = ({ className, type, id, name, placeholder, min, max }) => {
  return (
    <div className={className}>
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
