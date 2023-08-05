import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

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
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Code FreeLance</span>
          </Link>
        </div>
        <div className="links">
          <span className="username">Explore</span>
          {!currentUser?.isSeller && (
            <button className="navbarButtons">Become a Seller</button>
          )}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className="username">{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="options_link" to="/myTasks">
                        My Tasks
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
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button className="navbarButtons">Join</button>
              </Link>
            </>
          )}
        </div>
      </div>

      <>
        <hr />
        <div className="menu">
          <Link className="link menuLink" to="/">
            Debugging
          </Link>
          <Link className="link menuLink" to="/">
            Web Development
          </Link>
          <Link className="link menuLink" to="/">
            App Development
          </Link>
          <Link className="link menuLink" to="/">
            Code Review
          </Link>
          <Link className="link menuLink" to="/">
            Testing
          </Link>
          <Link className="link menuLink" to="/">
            Design UI/UX
          </Link>
          <Link className="link menuLink" to="/">
            AI Services
          </Link>

          <Link className="link menuLink" to="/">
            Programming & Tech
          </Link>
          <Link className="link menuLink" to="/">
            Business
          </Link>
        </div>
      </>
    </div>
  );
}

export default Navbar;
