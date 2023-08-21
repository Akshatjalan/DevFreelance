import React from "react";
import { Link } from "react-router-dom";
import "../styles/CatCard.css";

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        {/* <span className="desc">{card.desc}</span> */}
        <span className="catTitle">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
