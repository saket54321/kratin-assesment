import React, { useState } from "react";
import "./LoginPage.css";
import HomePage from "./HomePage";
import Ragister from "./Ragister"

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <div className="homePageContainer">
          <div className="loginNavbar">
            <div className="loginLogo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5969/5969117.png"
                alt="company Logo"
              />
              <h1 className="loginLogoDetails">
                HLGS(Healthy Living Guide for Seniors)
              </h1>
            </div>
            <div className="loginSection">
              <div className="loginInput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="loginInput">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
          <div className="singUp">
            <img
              src="https://media.istockphoto.com/id/701122536/vector/happy-hour.jpg?s=612x612&w=0&k=20&c=U_5tLkG4teFnRxYeqsIrA13QyIuxla6AQWWk721lWE4="
              alt=""
            />
            <Ragister />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
