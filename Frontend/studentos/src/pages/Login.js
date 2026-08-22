import React from "react";
import logo from "../images/logo.png";
import LoginForm from "../components/Login/LoginForm";

// The layout for the login that use the loginform component which contains the form 

const Login = () => {
  return (
    <div className="login-form display alignItemsC">
      <div className="signin-logo login-page display alignItemsC justifyItemsC">
        <img src={logo} alt="studentOs" className="logo-signin" />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
