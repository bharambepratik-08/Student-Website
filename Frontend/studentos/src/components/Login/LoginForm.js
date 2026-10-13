import React, { useState, useContext } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

// Form layout for the login (Frontend & Backend)

const LoginForm = () => {

  const context = useContext(UserContext);
  const { LoginUser } = context;

  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = LoginUser(
      credentials.email,
      credentials.password
    );

    if (ok) {navigate('/dashboard')};
  }

  return (
    // Frontend
    <div className="form-sigin-login display alignItemsC justifyItemsC">
      <form onSubmit={handleSubmit} className="display displayColumn gap-24">
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
