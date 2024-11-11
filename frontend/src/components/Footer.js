import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="top">
          <img src={logo} height="40px" alt="Codelance" />
          <div className="footerItems">
            <h2>About</h2>
            <h2>Services</h2>
            <h2>Contact Us</h2>
            <h2>About</h2>
          </div>
        </div>

        <div className="bottom">
          <span>© 2025 CodeLance. All rights reserved.</span>
          <span>Made by Akshat Jalan.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
