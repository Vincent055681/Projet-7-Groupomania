import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import Input from "../../UI/Input/Input";
import "./Form.scss"

const Form = ({ form }) => {

    return (
      <form className="form">
          {form === "register" ? 
          <>
          <Input className="input_container" key={uuidv4()} type="text" placeholder="Prénom" id="firstname" name="firstname" min="2" max="40" />
          <Input className="input_container" key={uuidv4()} type="text" placeholder="Nom" id="lastname" name="lastname" min="2" max="60" />
          <Input className="input_container" key={uuidv4()} type="email" placeholder="Votre adresse mail" id="email" name="email" />
          <Input className="input_container" key={uuidv4()} type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
          <Input className="input_container" key={uuidv4()} type="password" placeholder="Confirmez le mot de passe" id="verify-password" name="verify-password" min="10" max="32" />
          <Button name="Inscription" />
        </>
        :
        <>
        <Input className="input_container" key={uuidv4()} type="email" placeholder="Adresse mail" id="email" name="email" min="2" max="40" />
        <Input className="input_container" key={uuidv4()} type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
        <Button name="Connexion" />
        </>
        }
      </form>
    );
 
  }

export default Form;
