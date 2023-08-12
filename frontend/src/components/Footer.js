import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="top">
          <h2>CodeLance</h2>
          <div className="item">
            <h2>About</h2>
            <h2>Services</h2>
            <h2>Contact Us</h2>
            <h2>About</h2>
          </div>
        </div>

        <div className="bottom">
          <span>© 2023 CodeLance. All rights reserved.</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
