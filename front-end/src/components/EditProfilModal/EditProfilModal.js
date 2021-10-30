import React from "react";
import "./EditProfilModal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EditProfilModal = () => {
  return (
    <div className="modal">
      <div className="modal__close"> <Link to="/">
        <FontAwesomeIcon icon={faTimes} className="modal__close--icon" /></Link>
      </div>
      <div className="modal__infos">
        <div className="modal__photo"></div>
        <div className="modal__firstname">
          <span>Prénom : </span>
          <input type="text" name="" id="" />
        </div>
        <div className="modal__lastname">
          <span>Nom : </span>
          <input type="text" name="" id="" />
        </div>
        <div className="modal__email">
          <span>Email : </span>
          <input type="email" name="" id="" />
        </div>
        <div className="modal__password">
          <span>Changer le mot de passe : </span>
          <input type="text" name="" id="" />
        </div>
        <div className="modal__password">
          <span>Confirmer le nouveau mot de passe : </span>
          <input type="text" name="" id="" />
        </div>
        <div className="modal__save"></div>
      </div>
    </div>
  );
};

export default EditProfilModal;
