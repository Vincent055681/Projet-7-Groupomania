import React, { useRef, useEffect } from "react";
import "./EditProfilModal.scss";

import axios from "axios";
import ENDPOINTS from "../../api/endpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EditProfilModal = () => {
  const refFirstname = useRef();
  const refLastname = useRef();
  const refEmail = useRef();

  useEffect(() => {
    refFirstname.current.value = JSON.parse(
      localStorage.getItem("user")
    ).user_firstname;
    refLastname.current.value = JSON.parse(
      localStorage.getItem("user")
    ).user_lastname;
    refEmail.current.value = "dh";

    const toFetch = async () => {
      try {
        const params = 465;
        const response = await axios.get(
          `http://localhost:4200/api/user/${params}`
        );
        console.log(response);

      } catch (err) {
        throw err;
      }
    };
    toFetch();
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
