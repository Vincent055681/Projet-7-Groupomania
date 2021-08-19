import React, { useState } from "react";
import Button from "./button/Button";
import Input from "./input/Input";
import Link from "./link/Link";
import Tab from "./tab/Tab";
import "./identification-form.scss";

const IdentificationForm = () => {

  // const tabGroup = () =>  {
  //   const [active, setActive] = useState();
  // }

    

  return (
    <div className="identification-form">
      <div className="register-or-login">
        <Tab title="connexion" link="/connexion" />
        <Tab title="inscription" link="/inscription" />
      </div>
      <form className="form">
        <Input
          type="text"
          placeholder="Prénom"
          id="firstname"
          name="firstname"
          min="2"
          max="40"
        />
        <Input
          type="text"
          placeholder="Nom"
          id="lastname"
          name="lastname"
          min="2"
          max="60"
        />
        <Input
          type="email"
          placeholder="Votre adresse mail"
          id="email"
          name="email"
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          id="password"
          name="password"
          min="10"
          max="32"
        />
        <Input
          type="password"
          placeholder="Confirmez le mot de passe"
          id="verify-password"
          name="verify-password"
          min="10"
          max="32"
        />
        <Button />
        <Link />
      </form>
    </div>
  );
};

export default IdentificationForm;
