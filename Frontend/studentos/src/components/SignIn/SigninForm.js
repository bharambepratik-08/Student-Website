import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const SigninForm = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handeSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("token", json);
      navigate("/dashboard");
    } else {
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-sigin-login display alignItemsC justifyItemsC">
      <form onSubmit={handeSubmit} className="display displayColumn gap-24">
        <img src={logo} alt="studentOs" className="form-logo" />
        <h1 className="createUserHead">Create your account</h1>
        <div className="name-input-createuser display displayColumn gap-8">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="John Deo"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="name"
            value={credentials.name}
          />
        </div>
        <div className="email-input-createuser display displayColumn gap-8">
          <p>Email address</p>
          <input
            type="text"
            placeholder="johndeo@gmail.com"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="email"
            value={credentials.email}
          />
        </div>
        <div className="pass-input-createuser display displayColumn gap-8">
          <p>Password</p>
          <input
            type="text"
            placeholder="Password"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="cpassword"
          />
        </div>
        <div className="pass-input-createuser display displayColumn gap-8">
          <p>Confirm Password</p>
          <input
            type="text"
            placeholder="Confirm Password"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="password"
            value={credentials.password}
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
          <button
            type="submit"
            className="createUserBtn borderRadius-12 btnOutlineBorder display alignItemsC justifyItemsC"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
