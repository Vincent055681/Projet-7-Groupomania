import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { GET } from "../../api/axios";
import ENDPOINTS from "../../api/endpoints";

const Header = ({logged}) => {

  const userName = JSON.parse(localStorage.getItem("user")).user_firstname;

  return (
    <header>
      <NavLink exact to="/">
        <img className="logo" src="./imgs/logo/icon-left-font-recadre.png" alt="Groupomania" />
      </NavLink>
        {logged && <div className="profil">{userName}</div> }
    </header>
  );
};

export default Header;
