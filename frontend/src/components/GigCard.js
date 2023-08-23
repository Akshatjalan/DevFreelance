import React from "react";
import { Link } from "react-router-dom";
import "../styles/GigCard.css";
import starImg from "../assets/star.png";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img className="gigImg" src={item.img} alt="" />
        <div className="info">
          <div className="cardUser">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <div>
              <img className="starImg" src={starImg} alt="" />
              <span>{item.star}</span>
            </div>
            <div className="price">
              <span>STARTING AT</span>
              <h2>INR {item.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
