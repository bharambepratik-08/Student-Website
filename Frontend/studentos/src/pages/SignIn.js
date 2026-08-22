import React from "react";
import logo from "../images/logo.png";
import SigninForm from "../components/SignIn/SigninForm";

// The layout for the signup that use the signupform component which contains the form 

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
