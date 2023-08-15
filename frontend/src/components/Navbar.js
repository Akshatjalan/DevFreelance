import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/codelance_logo.png";
import profilePic from "../assets/undraw_Male_avatar.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  // const currentUser = null;

  const currentUser = {
    id: 1,
    username: "Akshat",
    isSeller: true,
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <Link className="link" to="/">
            {/* <span>CodeLance</span> */}
            <img src={logo} height="50px" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="nav_links" to="/">
            Find Developers
          </Link>
          <Link className="nav_links" to="/">
            Hire Coders
          </Link>
          <Link className="nav_links" to="/">
            Showcase Skills
          </Link>
          <Link className="nav_links" to="/">
            Discover Gigs
          </Link>
          {!currentUser?.isSeller && (
            <button className="Buttons1">Become Developer</button>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={profilePic} alt="" />
              <span className="nav_links">{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="options_link" to="/myGigs">
                        My Gigs
                      </Link>
                      <Link className="options_link" to="/add">
                        Add Gigs
                      </Link>
                    </>
                  )}
                  <Link className="options_link" to="/orders">
                    Orders
                  </Link>
                  <Link className="options_link" to="/messages">
                    Messages
                  </Link>
                  <Link className="options_link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* <Link className="nav_links">Sign in</Link> */}
              <Link className="link" to="/register">
                <button className="Buttons">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
