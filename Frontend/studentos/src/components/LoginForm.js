import React from 'react'
import logo from "../images/logo.png";

const LoginForm = () => {
  return (
    <div className="form-sigin-login display alignItemsC justifyItemsC">
        <form action="" className="display displayColumn gap-24">
          <img src={logo} alt="studentOs" className="form-logo" />
          <h1 className="createUserHead">Welcome Back</h1>
          <div className="email-input-createuser display displayColumn InputBoxBox gap-8">
            <p>Email address</p>
            <input
              type="text"
              placeholder="johndeo@gmail.com"
              className="InputBoxString padding-8"
            />
          </div>
          <div className="pass-input-createuser display displayColumn InputBoxBox gap-8">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              className="InputBoxString padding-8"
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
  )
}

export default LoginForm
