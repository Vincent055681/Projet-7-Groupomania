import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/">
        <img className="logo" src="./imgs/logo/icon-left-font-recadre.png" alt="Groupomania" />
      </NavLink>
    </header>
  );
};

export default Header;
