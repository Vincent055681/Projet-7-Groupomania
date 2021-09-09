import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../../UI/Input/Input";
import "./Form.scss";
import { POST } from "../../../api/axios";
import ENDPOINTS from "../../../api/endpoints";

import { v4 as uuidv4 } from "uuid";

const Form = ({ form }) => {
  const [user, setUser] = useState({
    user_firstname: "OO",
    user_lastname: "OO",
    user_email: "l26",
    user_password: "OO",
  });

  const callApi = async (e) => {
    e.preventDefault();
    console.log();
    await POST(ENDPOINTS.CREATE_USER, user)
  };

  return (
    <>
    { form === "register" ? (
      
      <form className="form" onSubmit={callApi}>
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
        <form className="form" onSubmit={callApi}>
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
