import React from 'react'
import logo from "../images/logo.png";

const SigninForm = () => {
  return (
    <div className="form-sigin-login display alignItemsC justifyItemsC">
        <form action="" className="display displayColumn gap-24">
          <img src={logo} alt="studentOs" className="form-logo" />
          <h1 className="createUserHead">Create your account</h1>
          <div className="name-input-createuser display displayColumn gap-8">
            <p>Full Name</p>
            <input
              type="text"
              placeholder="John Deo"
              className="InputBoxString padding-8"
            />
          </div>
          <div className="email-input-createuser display displayColumn gap-8">
            <p>Email address</p>
            <input
              type="text"
              placeholder="johndeo@gmail.com"
              className="InputBoxString padding-8"
            />
          </div>
          <div className="pass-input-createuser display displayColumn gap-8">
            <p>Password</p>
            <input
              type="text"
              placeholder="Password"
              className="InputBoxString padding-8"
            />
          </div>
          <div className="pass-input-createuser display displayColumn gap-8">
            <p>Confirm Password</p>
            <input
              type="text"
              placeholder="Confirm Password"
              className="InputBoxString padding-8"
            />
          </div>
          <div className="termAndCondition display gap-8">
            <input type="checkbox" />
            <p>
              I agree to the <a href="/signin">Terms of Service</a> and{" "}
              <a href="/signin">Privacy Policy</a>
            </p>
          </div>
          <div className="createAccountBtn">
            <button className="createUserBtn borderRadius-12 btnOutlineBorder display alignItemsC justifyItemsC">
              Create Account
            </button>
          </div>
        </form>
      </div>
  )
}

export default SigninForm
