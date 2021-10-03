import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import { POST } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

import { v4 as uuidv4 } from "uuid";

const Form = ({ form }) => {
  // States
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

  const [passwordFlag, setPasswordFlag] = useState({
    length: false,
    min: false,
    maj: false,
    num: false,
    special: false,
  });

  const [accountCreated, setAccountCreated] = useState(false);

  // Input refs
  const refSignupFirstName = useRef();
  const refSignupLastName = useRef();
  const refSignupEmail = useRef();
  const refSignupPassword = useRef();

  // const refLoginEmail = useRef();
  // const refLoginPassword = useRef();
  const { user_firstname, user_lastname, user_email, user_password } =
    userSignup;

  // Verify input data

  const checkFirstName = () => {
    if (user_firstname.trim().length < 2 || user_firstname.trim().length > 30) {
      refSignupFirstName.current.innerText =
        "Votre prénom doit faire entre 2 et 30 caractères";
    } else {
      refSignupFirstName.current.innerText = "";
    }
  };

  const checkLastName = () => {
    if (user_lastname.trim().length < 2 || user_lastname.trim().length > 30) {
      refSignupLastName.current.innerText =
        "Votre nom doit faire entre 2 et 30 caractères";
    } else {
      refSignupLastName.current.innerText = "";
    }
  };

  const checkEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = regex.test(String(email).toLowerCase());
    refSignupEmail.current.innerText = `${check ? "" : "Email incorrect"}`;
  };

  const checkPassword = (password) => {
    var flags = {
      length: false,
      min: false,
      maj: false,
      num: false,
      special: false,
    };

    if (password.length > 10) {
      flags.length = true;
    }
    if (password.match(/[a-z]/, "g")) {
      flags.min = true;
    }
    if (password.match(/[A-Z]/, "g")) {
      flags.maj = true;
    }
    if (password.match(/[0-9]/, "g")) {
      flags.num = true;
    }
    if (password.match(/\W|_/g)) {
      flags.special = true;
    }
    // setPasswordFlag((prev) => ({ ...prev, ...flags }));
    console.log(flags);
  };

  // Signup / login functions
  const signup = async (e) => {
    try {
      e.preventDefault();
      const response = await POST(ENDPOINTS.USER_SIGNUP, userSignup);
      if (response.status === 200) {
        refSignupEmail.current.innerText = "Email déjà enregistré";
      }
      if (response.status === 201) {
        setAccountCreated(true)
      }
    } catch (err) {
      console.log("Error during registration... : ", err);
    }
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await POST(ENDPOINTS.USER_LOGIN, userLogin);
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
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
                onBlur={checkFirstName}
                value={userSignup.user_firstname}
              />
              <div className="firstname error" ref={refSignupFirstName}></div>
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
                onBlur={checkLastName}
                value={userSignup.user_lastname}
              />
              <div className="lastname error" ref={refSignupLastName}></div>
              <input
                type="email"
                className="input_container"
                placeholder="Adresse email"
                id="email"
                name="email"
                onChange={(e) =>
                  setUserSignup({ ...userSignup, user_email: e.target.value })
                }
                onBlur={(e) => checkEmail(e.target.value)}
                value={userSignup.user_email}
              />
              <div className="email error" ref={refSignupEmail}></div>

              <input
                type="password"
                className="input_container"
                placeholder="Mot de passe"
                id="password"
                name="password"
                onChange={(e) => {
                  setUserSignup({
                    ...userSignup,
                    user_password: e.target.value,
                  });
                  checkPassword(e.target.value);
                }}
                value={userSignup.user_password}
                ref={refSignupPassword}
              />
              <div className="password error"></div>
              <input
                type="password"
                className="input_container"
                placeholder="Confirmer le mot de passe"
                id="password"
                name="password"
              />
              <div className="password-conf error"></div>
            </>
          }

          <Button name="Inscription" />
          <div className="account-created succes">{accountCreated && "Vous pouvez maintenant vous connecter !"}</div>
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
