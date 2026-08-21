import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handeSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem('token', json); // json is the auth token string
      navigate('/dashboard')
    } else {
      alert("Invalid Credentials")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-sigin-login display alignItemsC justifyItemsC">
      <form onSubmit={handeSubmit} className="display displayColumn gap-24">
        <img src={logo} alt="studentOs" className="form-logo" />
        <h1 className="createUserHead">Welcome Back</h1>
        <div className="email-input-createuser display displayColumn InputBoxBox gap-8">
          <p>Email address</p>
          <input
            type="text"
            placeholder="johndeo@gmail.com"
            className="InputBoxString padding-8"
            onChange={onChange}
            required
            name="email"
            value={credentials.email}
          />
        </div>
        <div className="pass-input-createuser display displayColumn InputBoxBox gap-8">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            className="InputBoxString padding-8"
            required
            onChange={onChange}
            name="password"
            value={credentials.password}
          />
        </div>
        <div className="termAndCondition display gap-8">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <div className="createAccountBtn">
          <button type="submit" className="createUserBtn borderRadius-12 btnOutlineBorder display alignItemsC justifyItemsC">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
