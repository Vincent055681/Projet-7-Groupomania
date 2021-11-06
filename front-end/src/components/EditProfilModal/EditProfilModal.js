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
        refFirstname.current.value = JSON.parse(
          localStorage.getItem("user")
        ).user_firstname;
        refLastname.current.value = JSON.parse(
          localStorage.getItem("user")
        ).user_lastname;
        const response = await axios.get(
          `http://localhost:4200/api/user/${
            JSON.parse(localStorage.getItem("user")).user_id
          }`
        );
        console.log(response);
        const email = response.data[0].user_email
        refEmail.current.value = email;
      } catch (err) {
        throw err;
      }
    };
    toFetchEmail();
  }, []);

  const desactivateAccount = () => {
    const userId = JSON.parse(localStorage.getItem("user")).user_id;
    axios.get(`http://localhost:4200/api/auth/desactivateAccount/${userId}`);
    localStorage.clear();
    document.location.href = "http://localhost:3000/connexion";
  };

  const [userNewInfos, setUserNewInfos] = useState({
    user_firstname: "",
    user_lastname: "",
  });

  let updatedUserNewInfos = {};
  const saveChange = async (e) => {
    e.preventDefault();
    updatedUserNewInfos = {
      ...userNewInfos,
      user_firstname: refFirstname.current.value,
      user_lastname: refLastname.current.value,
    };
    setUserNewInfos(updatedUserNewInfos);
    const data = {
      ...updatedUserNewInfos,
    };
    const response = await axios.put(
      `http://localhost:4200/api/user/${
        JSON.parse(localStorage.getItem("user")).user_id
      }`,
      data
    );
    console.log(response);

    const user_id = JSON.parse(localStorage.getItem("user")).user_id
    const user = {
      ...updatedUserNewInfos,
      user_id: user_id
    }
    console.log(user);
    localStorage.clear()
    localStorage.setItem("user", JSON.stringify(user))
    document.location.reload()

  };

  return (
    <div className="modal">
      <div className="modal__close">
        <Link to="/">
          <FontAwesomeIcon icon={faTimes} className="modal__close--icon" />
        </Link>
      </div>
      <form className="modal__infos" onSubmit={saveChange}>
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
          <input
            type="email"
            name=""
            id="modal__email--input"
            ref={refEmail}
            disabled
          />
        </div>
        <div className="modal__save">
          <input
            type="submit"
            name="modal__save"
            id="modal__save"
            value="Enregistrer"
          />
        </div>
        <button className="modal__delete_account" onClick={desactivateAccount}>
          Désactiver le compte
        </button>
      </form>
    </div>
  );
};

export default EditProfilModal;
