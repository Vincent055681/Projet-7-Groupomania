import React from "react";
import Header from "../components/Header/Header";
import IdentificationForm from "../components/IdentificationForm/IdentificationForm";
import "./Login.scss"

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <IdentificationForm />
      </main>
    </>
  );
};

export default Login;
