import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5969/5969117.png"
          alt="company Logo"
        />
        <h1 className="logoDetails">HLGS(Healthy Living Guide for Seniors)</h1>
      </div>
      <div className="companyName"></div>
      <div className="profile">
        <img
          src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
          alt="profile Image"
        />
      </div>
    </div>
  );
}

export default Header