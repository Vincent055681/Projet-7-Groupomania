import React from "react";
import "./ProfileTab.scss";

// Font Awesome
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GET } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

const ProfileTab = () => {
  const userName = JSON.parse(localStorage.getItem("user")).user_firstname;

  const logoutHandler = async () => {
    const response = await GET(ENDPOINTS.USER_LOGOUT);
    console.log(response);
  };
  // const changePage = () => {
  //   document.getElementById("test123");
  //   window.location.href = "/connexion";
  // };

  return (
    // remplacer les a par react router dom
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
        <div onClick={logoutHandler} className="profil-tab__menu-roller--logout">
          Déconnexion
        </div>
      <div  className="profil-tab__menu-roller--delete-account">
          Supprimer mon compte
        </div>
      </div>
    </nav>
  );
};

export default ProfileTab;
