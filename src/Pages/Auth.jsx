import React from "react";
import LoginForm from "../Components/LoginForm";
import "./Auth.css"
import cosmicConnectLogo from "../assets/cosmicConnectLogo.png"
import { useLocation } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="splashBackground">
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
        <div className="splashBackground-image" />
      </div>
      <div className="cosmicContents"> 
      <img src={cosmicConnectLogo} className='cosmicConnectLogo' alt="cosmicConnectLogo"/>
      {pathname.includes("login") ? <LoginForm /> : <SignUpForm />}
      </div>
    </>
  );
};

export default Auth;
