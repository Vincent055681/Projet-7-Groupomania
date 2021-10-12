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
      <ul>
        <li className="profil-tab__menu-roller">
          <img
            className="profil-tab__img"
            src={`${process.env.PUBLIC_URL}/imgs/profile-imgs/me.jpg`}
            alt="Profil"
          />
          <div className="profil-tab__user-name">{userName}</div>
          <FontAwesomeIcon
            className="profil-tab__chevron"
            icon={faChevronCircleDown}
          />
          <div className="profil-tab__sub-menu">
            <li>
              <a href="#">Profil</a>
            </li>
            <li onClick={logoutHandler} id="test123">
              Déconnexion
            </li>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileTab;
