import React from "react";
import { Link } from "react-router-dom";


// The landing page 
const HomePage = () => {
  return (
    <div>
      <Link
        to="/signin"
        className="navBarRouterBtn signinNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
      >
        Sign In
      </Link>
      <Link
        to="/login"
        className="navBarRouterBtn loginNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
      >
        Login
      </Link>
    </div>
  );
};

export default HomePage;
