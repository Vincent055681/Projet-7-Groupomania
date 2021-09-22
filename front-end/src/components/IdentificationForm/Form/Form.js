import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import { POST } from "../../../api/axios";
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
    user_email: "",
    user_password: "",
  });

  // Input refs
  const refSignupFirstName = useRef();
  const refSignupLastName = useRef();
  const refSignupEmail = useRef();
  const refSignupPassword = useRef();

  const refLoginEmail = useRef();
  const refLoginPassword = useRef();

  // Signup / login functions
  const signup = async (e) => {
    try {
      e.preventDefault();
      // C'est toujours le state précédent qui s'envoie, même avec prevState... je cherche comment régler ça
      setUserSignup((prevState) => {
        console.table(refSignupFirstName.current.value);
        return {
          ...prevState,
          user_firstname: refSignupFirstName.current.value,
          user_lastname: refSignupLastName.current.value,
          user_email: refSignupEmail.current.value,
          user_password: refSignupPassword.current.value,
        };
      });
      const response = await POST(ENDPOINTS.USER_SIGNUP, userSignup);
      console.log(response);
    } catch (err) {
      console.log("Error during registration... : ", err);
    }
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      setUserLogin((prevState) => {
        return {
          ...prevState,
          user_email: refLoginEmail.current.value,
          user_password: refLoginPassword.current.value,
        };
      });
      const response = await POST(ENDPOINTS.USER_LOGIN, userLogin);
      console.log(response);
    } catch (err) {
      console.log("Error during connection... : ", err);
    }
  };

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
            ref={refLoginEmail}
          />
          <input
            key={uuidv4()}
            type="password"
            className="input_container"
            placeholder="Mot de passe"
            id="password"
            name="password"
            ref={refLoginPassword}
          />
          <Button name="Connexion" />
        </form>
      )}
    </>
  );
};

export default Form;
