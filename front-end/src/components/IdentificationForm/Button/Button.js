import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.scss";

const Button = ({ name }) => {
  return (
    <NavLink exact to="/">
      <button>{name}</button>
    </NavLink>
  );
};

export default Button;
