import React from "react";
import { Link } from "react-router-dom";
import "../styles/GigCard.css";
import starImg from "../assets/star.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import avatarImg from "../assets/undraw_Male_avatar.png";

const GigCard = ({ item }) => {
  const { isLoading, error } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  const PlaceholderCard = () => (
    <div className="gigCard placeholder">
      <div className="gigImg placeholder-img" />
      <div className="info">
        <div className="cardUser">
          <div className="placeholder-avatar" />
          <span className="placeholder-text short" />
        </div>
        <p className="placeholder-text long" />
        <div className="star">
          <div>
            <div className="starImg placeholder-star" />
            <span className="placeholder-text short" />
          </div>
          <div className="price">
            <span className="placeholder-text tiny" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Link to={`/gig/${item._id}`} className="link">
      {isLoading ? (
        <PlaceholderCard />
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="gigCard">
          <img className="gigImg" src={item.cover} alt="" />
          <div className="info">
            <div className="cardUser">
              <img
                src={
                  item.images && item.images.length > 0
                    ? item.images
                    : avatarImg
                }
                alt=""
              />
              <span>{item.shortTitle}</span>
            </div>

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
      )}
    </Link>
  );
};

export default GigCard;
