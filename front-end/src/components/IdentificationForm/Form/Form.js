import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.scss"

const Form = ({ form }) => {
    return (
      <form className="form">
          {form === "register" ? 
          <>
          <Input type="text" placeholder="Prénom" id="firstname" name="firstname" min="2" max="40" />
          <Input type="text" placeholder="Nom" id="lastname" name="lastname" min="2" max="60" />
          <Input type="email" placeholder="Votre adresse mail" id="email" name="email" />
          <Input type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
          <Input type="password" placeholder="Confirmez le mot de passe" id="verify-password" name="verify-password" min="10" max="32" />
          <Button name="Inscription" />
        </>
        :
        <>
        <Input type="email" placeholder="Adresse mail" id="email" name="email" min="2" max="40" />
        <Input type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
        <Button name="Connexion" />
        </>
        }
      </form>
    );
 
  }

export default Form;
