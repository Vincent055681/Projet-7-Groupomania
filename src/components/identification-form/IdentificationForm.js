import React from "react";
import Button from "./button/Button";
import Input from "./input/Input";
import Link from "./link/Link";
import Tab from "./tab/Tab";
import "./identification-form.scss"

const IdentificationForm = () => {
  return (
    <div className="identification-form">
      <div className="register-or-login">
          <Tab />
          <Tab />
      </div>
      <div className="form">
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Button />
        <Link />
      </div>
    </div>
  );
};

export default IdentificationForm;
