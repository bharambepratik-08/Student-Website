import React from "react";
import logo from "../images/logo.png";
import SigninForm from "../components/SignIn/SigninForm";

const SignIn = () => {
  return (
    <div className="sigin-form display alignItemsC">
      <SigninForm />
      <div className="signin-logo display alignItemsC justifyItemsC">
        <img src={logo} alt="studentOs" className="logo-signin" />
      </div>
    </div>
  );
};

export default SignIn;
