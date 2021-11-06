import React from "react";
import { Link } from "react-router-dom";
import "./ProfileTab.scss";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faUserEdit, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import axios from "axios"
import Avatar from "../../UI/Avatar/Avatar";

const ProfileTab = () => {
  const userName = JSON.parse(localStorage.getItem("user")).user_firstname;

  const logoutHandler = async () => {
    localStorage.clear();
    await axios.get("http://localhost:4200/api/auth/logout");
    window.location.href = "http://localhost:3000/connexion";
  };

  return (
    <nav className="profil-tab">
      <div className="profil-tab__id">
        <Avatar className="profil-tab__id-img"/>
        <div className="profil-tab__id-user-name">{userName}</div>
        <FontAwesomeIcon
          className="profil-tab__id-chevron"
          icon={faChevronCircleDown}
        />
      </div>
      <div className="profil-tab__menu-roller">
        <div className="profil-tab__menu-roller--edit-profile">
        <FontAwesomeIcon
          className="profil-tab__menu-roller--edit-profile-icon"
          icon={faUserEdit}
        />
          <Link to="/editprofil">Éditer le profil</Link>
        </div>
        <div
          onClick={logoutHandler}
          className="profil-tab__menu-roller--logout"
        >
          <FontAwesomeIcon
          className="profil-tab__menu-roller--logout-icon"
          icon={faSignOutAlt}
        />
          Déconnexion
        </div>
      </div>
    </nav>
  );
};

export default ProfileTab;
