import React from "react";
import "./EditProfilModal.scss";

const EditProfilModal = () => {
  return (
    <div className="modal">
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
      </div>
    </div>
  );
};

export default EditProfilModal;
