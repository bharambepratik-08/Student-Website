import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import UserContext from "../../context/User/UserContext";

// Form layout for the signup (Frontend & Backend)

const SigninForm = () => {
  
  const context = useContext(UserContext);
  const { addUser } = context;
  
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
  userName: "",
  email: "",
  password: "",
  cpassword: "",
});


  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();                                  
  if (formData.password !== formData.cpassword) {
    alert("Passwords do not match");
    return;
  }
  const ok = await addUser(                        
    formData.userName,
    formData.email,
    formData.password
  );
  if (ok) navigate("/dashboard");                      
};
  


  return (

    // Frontend 
    <div className="form-sigin-login display alignItemsC justifyItemsC">
      <form className="display displayColumn gap-24">
        <img src={logo} alt="studentOs" className="form-logo" />
        <h1 className="createUserHead">Create your account</h1>
        <div className="name-input-createuser display displayColumn gap-8">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="John Deo"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="userName"
            value={formData.userName}
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
            value={formData.email}
          />
        </div>
        <div className="pass-input-createuser display displayColumn gap-8">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="password"
            value={formData.password}
          />
        </div>
        <div className="pass-input-createuser display displayColumn gap-8">
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            className="InputBoxString padding-8"
            onChange={onChange}
            name="cpassword"
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
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
