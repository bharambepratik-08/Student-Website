import React from "react";
import logo from "../images/logo.png";

const Login = () => {
  return (
    <div className="sigin-form display alignItemsC">
      <div className="signin-logo login-page display alignItemsC justifyItemsC">
        <img src={logo} alt="studentOs" className="logo-signin" />
      </div>
      <div className="form-sigin-login display alignItemsC justifyItemsC">
        <form action="" className="display displayColumn gap-24">
          <img src={logo} alt="studentOs" className="form-logo" />
          <h1 className="createUserHead">Welcome Back</h1>
          <div className="email-input-createuser display displayColumn createUserDiv gap-8">
            <p>Email address</p>
            <input
              type="text"
              placeholder="johndeo@gmail.com"
              className="form-input padding-8"
            />
          </div>
          <div className="pass-input-createuser display displayColumn createUserDiv gap-8">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              className="form-input padding-8"
            />
          </div>
          <div className="termAndCondition display gap-8">
            <input type="checkbox" />
            <p>
              Remember me
            </p>
          </div>
          <div className="createAccountBtn">
            <button className="createUserBtn borderRadius-12 btnOutlineBorder display alignItemsC justifyItemsC">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
