import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../../UI/Input/Input";
import "./Form.scss";
import { POST, GET } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

import { v4 as uuidv4 } from "uuid";

const Form = ({ form }) => {
  const [userSignup, setUserSignup] = useState({
    user_firstname: "Jean",
    user_lastname: "Luc",
    user_email: "61d9@dd.com",
    user_password: "5azd85",
  });

  const [userLogin, setUserLogin] = useState({
    user_email: "61d9@dd.com",
    user_password: "5azd85",
  });

  const signup = async (e) => {
    e.preventDefault();
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


  return (
    <>
      {form === "register" ? (
        <form className="form" onSubmit={signup}>
          <Input
            key={uuidv4()}
            className="input_container"
            type="text"
            placeholder="Prénom"
            id="firstname"
            name="firstname"
            min="2"
            max="40"
          />
          <Input
            key={uuidv4()}
            className="input_container"
            type="text"
            placeholder="Nom"
            id="lastname"
            name="lastname"
            min="2"
            max="60"
          />
          <Input
            key={uuidv4()}
            className="input_container"
            type="email"
            placeholder="Votre adresse mail"
            id="email"
            name="email"
          />
          <Input
            key={uuidv4()}
            className="input_container"
            type="password"
            placeholder="Mot de passe"
            id="password"
            name="password"
            min="10"
            max="32"
          />
          <Input
            key={uuidv4()}
            className="input_container"
            type="password"
            placeholder="Confirmez le mot de passe"
            id="verify-password"
            name="verify-password"
            min="10"
            max="32"
          />
          <Button name="Inscription" />
        </form>
      ) : (
        <form className="form" onSubmit={login}>
          <Input
            key={uuidv4()}
            className="input_container"
            type="email"
            placeholder="Adresse mail"
            id="email"
            name="email"
            min="2"
            max="40"
          />
          <Input
            key={uuidv4()}
            className="input_container"
            type="password"
            placeholder="Mot de passe"
            id="password"
            name="password"
            min="10"
            max="32"
          />
          <Button name="Connexion" />
        </form>
      )}
    </>
  );
};

export default Form;
