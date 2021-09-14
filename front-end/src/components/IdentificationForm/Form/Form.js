import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import { POST, GET } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

import { v4 as uuidv4 } from "uuid";

const Form = ({ form }) => {
  const [userSignup, setUserSignup] = useState({
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_password: "",
  });

  const [userLogin, setUserLogin] = useState({
    user_email: "azerty@mail.coma",
    user_password: "azertyazerty",
  });

  const signup = async (e) => {
    e.preventDefault();
    console.log(refSignupEmail.current.value);
    // C'est toujours le state précédent qui s'envoie, même avec prevState... je cherche comment régler ça
    setUserSignup((prevState) => {
      return {
        ...prevState,
        user_firstname: refSignupFirstName.current.value,
        user_lastname: refSignupLastName.current.value,
        user_email: refSignupEmail.current.value,
        user_password: refSignupPassword.current.value,
      };
    });
    await POST(ENDPOINTS.USER_SIGNUP, userSignup);
  };

  const login = async (e) => {
    e.preventDefault();
    await POST(ENDPOINTS.USER_LOGIN, userLogin);
    // await GET(ENDPOINTS.USER_LOGIN)
    fetch("http://localhost:4200/api/auth/login")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const refSignupFirstName = useRef(null);
  const refSignupLastName = useRef(null);
  const refSignupEmail = useRef(null);
  const refSignupPassword = useRef(null);

  return (
    <>
      {form === "register" ? (
        <form className="form" onSubmit={signup}>
          {
            <>
              <input
                key={uuidv4()}
                type="text"
                className="input_container"
                placeholder="Prénom"
                id="firstname"
                name="firstname"
                ref={refSignupFirstName}
              />
              <input
                key={uuidv4()}
                type="text"
                className="input_container"
                placeholder="Nom"
                id="lastname"
                name="lastname"
                ref={refSignupLastName}
              />
              <input
                key={uuidv4()}
                type="email"
                className="input_container"
                placeholder="Adresse email"
                id="email"
                name="email"
                ref={refSignupEmail}
              />
              <input
                key={uuidv4()}
                type="password"
                className="input_container"
                placeholder="Mot de passe"
                id="password"
                name="password"
                ref={refSignupPassword}
              />
              <input
                key={uuidv4()}
                type="password"
                className="input_container"
                placeholder="Confirmer le mot de passe"
                id="password"
                name="password"
                ref={refSignupPassword}
              />
            </>
          }

          <Button name="Inscription" />
        </form>
      ) : (
        <form className="form" onSubmit={login}>
          <input
            key={uuidv4()}
            type="email"
            className="input_container"
            placeholder="Adresse mail"
            id="email"
            name="email"
          />
          <input
            key={uuidv4()}
            type="password"
            className="input_container"
            placeholder="Mot de passe"
            id="password"
            name="password"
          />
          <Button name="Connexion" />
        </form>
      )}
    </>
  );
};

export default Form;
