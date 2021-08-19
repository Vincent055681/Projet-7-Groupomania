import React from "react";
import Header from "../components/header/Header";
import IdentificationForm from "../components/identification-form/IdentificationForm";
import "./register.scss";

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <IdentificationForm />
      </main>
    </>
  );
};

export default Register;
