import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import ProfileTab from "./ProfileTab/ProfileTab";

const Header = ({profileTab}) => {

  return (
    <header>
      <NavLink exact to="/">
        <img className="logo" src="./imgs/logo/icon-left-font-recadre.png" alt="Groupomania" />
      </NavLink>
        {profileTab && <ProfileTab />}
    </header>
  );
};

export default Header;
