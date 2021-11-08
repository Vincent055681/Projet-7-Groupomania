import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import { POST } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

import { useHistory } from "react-router-dom";

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

  const [loginError, setLoginError] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // Input refs
  const refSignupFirstName = useRef();
  const refSignupEmail = useRef();
  const refSignupPassword = useRef();
  const refSignupPasswordInfos = useRef();
  const refSignupPasswordConfirmation = useRef();

  const refSignupFirstNameError = useRef();
  const refSignupLastNameError = useRef();
  const refSignupEmailError = useRef();
  const refSignupPasswordError = useRef();
  const refSignupPasswordConfirmationError = useRef();

  const { user_firstname, user_lastname } = userSignup;

  // Verify input data

  const checkFirstName = () => {
    if (user_firstname.trim() === "") {
      refSignupFirstNameError.current.innerText = "";
    } else if (
      user_firstname.trim().length < 2 ||
      user_firstname.trim().length > 30
    ) {
      refSignupFirstNameError.current.innerText =
        "Votre prénom doit faire entre 2 et 30 caractères";
    } else {
      refSignupFirstNameError.current.innerText = "";
      return true;
    }
  };

  const checkLastName = () => {
    if (user_lastname.trim() === "") {
      refSignupLastNameError.current.innerText = "";
    } else if (
      user_lastname.trim().length < 2 ||
      user_lastname.trim().length > 30
    ) {
      refSignupLastNameError.current.innerText =
        "Votre nom doit faire entre 2 et 30 caractères";
    } else {
      refSignupLastNameError.current.innerText = "";
      return true;
    }
  };

  const checkEmail = (email) => {
    if (email.trim() === "") {
      refSignupEmailError.current.innerText = "";
    } else {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const check = regex.test(String(email).toLowerCase());
      refSignupEmailError.current.innerText = `${
        check ? "" : "Email incorrect"
      }`;
      if (check) return true;
    }
  };

  const checkPassword = (password) => {
    setPasswordFocus(true);
    var flags = {
      length: false,
      min: false,
      maj: false,
      num: false,
      special: false,
    };

    if (password.length >= 10) {
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
    setPasswordFlag((prev) => ({ ...prev, ...flags }));
  };

  const checkSamePassword = () => {
    if (
      refSignupPasswordConfirmation.current.value ===
      refSignupPassword.current.value
    ) {
      refSignupPasswordConfirmationError.current.innerHTML = "";
      return true;
    } else {
      refSignupPasswordConfirmationError.current.innerHTML =
        "Les mots de passe ne correspondent pas";
    }
  };

  // Signup / login functions
  const signup = async (e) => {
    try {
      e.preventDefault();

      const { length, min, maj, num, special } = passwordFlag;
      if (
        checkFirstName() &&
        checkLastName() &&
        checkEmail(refSignupEmail.current.value) &&
        length &&
        min &&
        maj &&
        num &&
        special &&
        checkSamePassword()
      ) {
        const response = await POST(ENDPOINTS.USER_SIGNUP, userSignup);
        if (response.status === 200) {
          refSignupEmailError.current.innerText = "Email déjà enregistré";
        }
        if (response.status === 201) {
          setAccountCreated(true);
        }
      }
    } catch (err) {
      throw err;
    }
  };

  const history = useHistory();
  const login = async (e) => {
    try {
      e.preventDefault();
      const response = await POST(ENDPOINTS.USER_LOGIN, userLogin, {
        withCredentials: true,
      });
      if (!response.data.error) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const toRedirect = (link) => {
          history.push(link);
        };
        toRedirect("/");
      } else {
        setLoginError(response.data.message);
      }
    } catch (err) {
      throw err;
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
                ref={refSignupFirstName}
              />
              <div
                className="firstname error"
                ref={refSignupFirstNameError}
              ></div>
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
              <div
                className="lastname error"
                ref={refSignupLastNameError}
              ></div>
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
                ref={refSignupEmail}
              />
              <div className="email error" ref={refSignupEmailError}></div>

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
                onBlur={() => {
                  checkSamePassword();
                }}
                value={userSignup.user_password}
                ref={refSignupPassword}
              />
              <div
                className="password error"
                ref={refSignupPasswordError}
              ></div>
              {passwordFocus ? (
                <ul className="password infos" ref={refSignupPasswordInfos}>
                  <div>
                    <li className="length">
                      {passwordFlag.length ? "✔️" : "❌"} 10 caractères
                    </li>
                    <li className="maj">
                      {passwordFlag.maj ? "✔️" : "❌"} Une majuscule
                    </li>
                    <li className="min">
                      {passwordFlag.min ? "✔️" : "❌"} Une minuscule
                    </li>
                    <li className="num">
                      {passwordFlag.num ? "✔️" : "❌"} Un nombre
                    </li>
                    <li className="special">
                      {passwordFlag.special ? "✔️" : "❌"} Un caractère spécial
                    </li>
                  </div>
                </ul>
              ) : null}
              <input
                type="password"
                className="input_container"
                placeholder="Confirmer le mot de passe"
                id="password"
                name="password"
                ref={refSignupPasswordConfirmation}
                onChange={() => {
                  checkSamePassword();
                }}
              />
              <div
                className="password-conf error"
                ref={refSignupPasswordConfirmationError}
              ></div>
            </>
          }

          <Button name="Inscription" />
          <div className="account-created succes">
            {accountCreated && "Vous pouvez maintenant vous connecter !"}
          </div>
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
          <div className="login_error">{loginError}</div>
          <p></p>
          <Button name="Connexion" />
        </form>
      )}
    </>
  );
};

export default Form;
