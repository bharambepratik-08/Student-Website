import React from "react";
import logo from "../images/logo.png";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="sigin-form display alignItemsC">
      <div className="signin-logo login-page display alignItemsC justifyItemsC">
        <img src={logo} alt="studentOs" className="logo-signin" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
