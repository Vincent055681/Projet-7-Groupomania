import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./EditProfilModal.scss";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faImage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const EditProfilModal = () => {
  const refFirstname = useRef();
  const refLastname = useRef();
  const refEmail = useRef();

  const [imgSrc, setImgSrc] = useState("")
  
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
        const email = response.data[0].user_email;
        refEmail.current.value = email;
      } catch (err) {
        throw err;
      }
    };
    toFetchEmail();
  }, []);

  const history = useHistory();

  const desactivateAccount = () => {
    if (!window.confirm(`Voulez-vous vraiment désactiver le compte ?`)) return;

    const userId = JSON.parse(localStorage.getItem("user")).user_id;
    axios.get(`http://localhost:4200/api/auth/desactivateAccount/${userId}`);
    localStorage.clear();
    const toRedirect = (link) => {
      history.push(link);
    };
    toRedirect("/connexion");
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
       user_image: document.getElementById("profil_image").files[0],
    };
    setUserNewInfos(updatedUserNewInfos);

    const post = new FormData()
    post.append("user_firstname", refFirstname.current.value)
    post.append("user_lastname", refLastname.current.value)
    post.append("profil_image", document.getElementById("profil_image").files[0])

    await axios.put(
      `http://localhost:4200/api/user/${
        JSON.parse(localStorage.getItem("user")).user_id
      }`,
      post
    );

    const user_id = JSON.parse(localStorage.getItem("user")).user_id;
    const user = {
      ...updatedUserNewInfos,
      user_id: user_id,
    };
  
    localStorage.clear();
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/"
  };

  

  useEffect(() => {
    const toFetchProfilPicture = async () => {
      try {       
        const response = await axios.get(
          `http://localhost:4200/api/user/image/${JSON.parse(localStorage.getItem("user")).user_id}`
          );
          
          if (response.data[0]) setImgSrc(response.data[0].image_url)
          else setImgSrc("./images/profils/default/mee.png")
      } catch (err) {
        throw err;
      }
    };
    toFetchProfilPicture();
  }, []);

  const img = document.getElementById("profil_image");

  return (
    <div className="modal">
      <div className="modal__close">
        <Link to="/">
          <FontAwesomeIcon icon={faTimes} className="modal__close--icon" />
        </Link>
      </div>
      <form className="modal__infos" onSubmit={saveChange}>
        {/* <Avatar className="modal__photo" editable id="profil_image" /> */}
        <div className="modal__photo"> 
          <img src={`http://localhost:4200/${imgSrc}`} alt="profile_picture" />
          <input type="file" name="profil_image" id="profil_image" />
          <label htmlFor="profil_image">
        
            <FontAwesomeIcon
              icon={faImage}
              className="profile_picture__change"
            />
          </label>
        </div>
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
