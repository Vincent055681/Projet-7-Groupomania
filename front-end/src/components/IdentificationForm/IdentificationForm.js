import React, { useState } from "react";
import Link from "./Link/Link";
import "./IdentificationForm.scss";
import Tab from "./Tabs/Tab";
import Form from "./Form/Form";

const IdentificationForm = () => {
  const [formLogin, setFormLogin] = useState("login");
  const [formRegister, setFormRegister] = useState("register");

  const displayRegister = () => {
    setFormRegister("register");
    setFormLogin(null);
  };

  const displayLogin = () => {
    setFormLogin("login");
    setFormRegister(null);
  };

  return (
    <div className="identification-container">
      <div className="register-or-login">
        <Tab onClick={displayRegister} className={formRegister ? "tab active-style" : "tab"}>Inscription</Tab>
        <div className="break" />
        <Tab onClick={displayLogin} className={formLogin ? "tab active-style" : "tab"}>Connexion</Tab>
      </div>
      {formRegister === "register" ? (
        <>
          <Form form="register" />
          <div className="links">
            <Link content="Vous avez déjà un compte ?" onClick={displayLogin} />
          </div>
        </>
      ) : (
        <>
          <Form form="login" />
          <div className="links">
            <Link content="Mot de passe oublié ?" onClick={displayRegister} />
            <Link content="Pas encore de compte ?" onClick={displayRegister} />
          </div>
        </>
      )}
    </div>
  );
};

export default IdentificationForm;
