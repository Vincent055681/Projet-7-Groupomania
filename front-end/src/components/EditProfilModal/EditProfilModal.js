import React, { useRef, useEffect, useState } from "react";
import "./EditProfilModal.scss";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EditProfilModal = () => {

  const refFirstname = useRef();
  const refLastname = useRef();
  const refEmail = useRef();

  useEffect(() => {
    const toFetchEmail = async () => {
      try {
        refFirstname.current.value = JSON.parse(localStorage.getItem("user")).user_firstname;
        refLastname.current.value = JSON.parse(localStorage.getItem("user")).user_lastname;
        const response = await axios.get(`http://localhost:4200/api/user/${JSON.parse(localStorage.getItem("user")).user_id}`)
        refEmail.current.value = response.data;
      } catch (err) {
        throw err;
      }
    };
    toFetchEmail()
  }, []);
 

  return (
    <div className="modal">
      <div className="modal__close">
        <Link to="/">
          <FontAwesomeIcon icon={faTimes} className="modal__close--icon" />
        </Link>
      </div>
      <form className="modal__infos">
        <div className="modal__photo"></div>
        <div className="modal__firstname">
          <span>Prénom : </span>
          <input ref={refFirstname} type="text" name="" id="" />
        </div>
        <div className="modal__lastname">
          <span>Nom : </span>
          <input ref={refLastname} type="text" name="" id="" />
        </div>
        <div className="modal__email">
          <span>Email : </span>
          <input type="email" name="" id="" ref={refEmail} />
        </div>
        <div className="modal__password">
          <span>Changer le mot de passe : </span>
          <input type="password" name="" id="" />
        </div>
        <div className="modal__password">
          <span>Confirmer le nouveau mot de passe : </span>
          <input type="password" name="" id="" />
        </div>
        <div className="modal__save">
          <input type="submit" name="" id="" />
        </div>
      </form>
    </div>
  );
};

export default EditProfilModal;