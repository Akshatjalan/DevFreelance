import React, { useState } from "react";
// import upload from "../utils/upload";
import "../styles/Register.css";
import newRequest from "../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [errorMsg, setErrorMsg] = useState("");
  // const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
      });
      navigate("/");
    } catch (err) {
      // Try to extract a readable message
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMsg(err.response.data.message);
      } else if (err.response && err.response.data) {
        setErrorMsg(err.response.data);
      } else {
        setErrorMsg("Registration failed. Please check your input.");
      }
    }
  };
  return (
    <>
      <p className="loginLine">
        Already have an account? <Link to="/login">SignIn</Link>
      </p>
      <p className="loginsecondLine">
        For testing purposes, use the credentials: username: <b>user</b> and
        password: <b>user</b>
      </p>
      {errorMsg && <div className="registerError">{errorMsg}</div>}
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="John doe"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="johndoe@mail.com"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              placeholder="********"
              onChange={handleChange}
            />
            {/* <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
            <label htmlFor="">Country</label>
            <input
              name="country"
              type="text"
              placeholder="India"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </div>
          <div className="right">
            <h1>I want to become a Developer</h1>
            <div className="toggle">
              <label htmlFor="">Activate the Developer account</label>
              <label className="switch">
                <input type="checkbox" onChange={handleSeller} />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="+91 9876543210"
              onChange={handleChange}
            />
            <label htmlFor="">Description</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
