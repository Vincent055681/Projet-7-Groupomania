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
  // const refSignupFirstName = useRef();
  // const refSignupLastName = useRef();
  // const refSignupEmail = useRef();
  // const refSignupPassword = useRef();

  // const refLoginEmail = useRef();
  // const refLoginPassword = useRef();

  // Signup / login functions
  const signup = async (e) => {
    try {
      e.preventDefault();
      const response = await POST(ENDPOINTS.USER_SIGNUP, userSignup);
      console.log(response);
    } catch (err) {
      console.log("Error during registration... : ", err);
    }
  };

  const login = async (e) => {
    try {
      e.preventDefault();
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
                type="text"
                className="input_container"
                placeholder="Prénom"
                id="firstname"
                name="firstname"
                onChange={(e) =>
                  setUserSignup({
                    ...userSignup,
                    user_firstname: e.target.value,
                  })
                }
                value={userSignup.user_firstname}
              />
              <input
                type="text"
                className="input_container"
                placeholder="Nom"
                id="lastname"
                name="lastname"
                onChange={(e) =>
                  setUserSignup({
                    ...userSignup,
                    user_lastname: e.target.value,
                  })
                }
                value={userSignup.user_lastname}
              />
              <input
                type="email"
                className="input_container"
                placeholder="Adresse email"
                id="email"
                name="email"
                onChange={(e) =>
                  setUserSignup({ ...userSignup, user_email: e.target.value })
                }
                value={userSignup.user_email}
              />
              <input
                type="password"
                className="input_container"
                placeholder="Mot de passe"
                id="password"
                name="password"
                onChange={(e) =>
                  setUserSignup({
                    ...userSignup,
                    user_password: e.target.value,
                  })
                }
                value={userSignup.user_password}
              />
              <input
                type="password"
                className="input_container"
                placeholder="Confirmer le mot de passe"
                id="password"
                name="password"
              />
            </>
          }

          <Button name="Inscription" />
        </form>
      ) : (
        <form className="form" onSubmit={login}>
          <input
            type="email"
            className="input_container"
            placeholder="Adresse mail"
            id="login-email"
            name="email"
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                user_email: e.target.value,
              })
            }
            value={userLogin.user_email}
          />
          <input
            
            type="password"
            className="input_container"
            placeholder="Mot de passe"
            id="login-password"
            name="password"
            onChange={(e) =>
              setUserLogin({
                ...userLogin,
                user_password: e.target.value,
              })
            }
            value={userLogin.user_password}
          />
          <Button name="Connexion" />
        </form>
      )}
    </>
  );
};

export default Form;
