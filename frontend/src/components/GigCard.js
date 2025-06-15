import React from "react";
import { Link } from "react-router-dom";
import "../styles/GigCard.css";
import starImg from "../assets/star.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img className="gigImg" src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="cardUser">
              <img src={item.images} alt="" />
              <span>{item.shortTitle}</span>
            </div>
          )}

          <p>{item.title}</p>
          <div className="star">
            <div>
              <img className="starImg" src={starImg} alt="" />
              <span>{item.totalStars}</span>
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
