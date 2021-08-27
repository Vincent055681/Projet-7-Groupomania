import React, { useState } from "react";
import "./Input.scss";

const Input = ({ className, type, id, name, placeholder, min, max }) => {

  const inputHandler = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue);
  }

  const [inputValue, setInputValue] = useState('')

  return (
    <div className={className}>
      <input type={type} id={id} name={name} placeholder={placeholder} minLength={min} maxLength={max} required value={inputValue} onChange={inputHandler} />
    </div>
  );
};

export default Input;
