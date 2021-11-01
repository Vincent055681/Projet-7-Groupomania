import React from "react";
import { Link } from "react-router-dom";
import "./ProfileTab.scss";

// Font Awesome
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios"

const ProfileTab = () => {
  const userName = JSON.parse(localStorage.getItem("user")).user_firstname;

  const logoutHandler = async () => {
    localStorage.clear();
    const response = await axios.get("http://localhost:4200/api/auth/logout");
    console.log("response : ", response);
    window.location.href = "http://localhost:3000/connexion";
  };

  return (
    <nav className="profil-tab">
      <div className="profil-tab__id">
        <img
          className="profil-tab__id-img"
          src={`${process.env.PUBLIC_URL}/imgs/profile-imgs/me.jpg`}
          alt="Profil"
        />
        <div className="profil-tab__id-user-name">{userName}</div>
        <FontAwesomeIcon
          className="profil-tab__id-chevron"
          icon={faChevronCircleDown}
        />
      </div>
      <div className="profil-tab__menu-roller">
        <div className="profil-tab__menu-roller--edit-profile">
          <Link to="/editprofil">Editer le profil</Link>
        </div>
        <div
          onClick={logoutHandler}
          className="profil-tab__menu-roller--logout"
        >
          Déconnexion
        </div>
      </div>
    </nav>
  );
};

export default ProfileTab;
