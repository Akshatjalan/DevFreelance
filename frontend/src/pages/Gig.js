import React from "react";
import "../styles/Gig.css";
import clock from "../assets/clock.png";
import recycle from "../assets/recycle.png";
import check from "../assets/check.png";
import star from "../assets/star.png";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  // const userId = data?.userId;

  // const {
  //   isLoading: isLoadingUser,
  //   error: errorUser,
  //   data: dataUser,
  // } = useQuery({
  //   queryKey: ["user"],

  //   queryFn: () =>
  //     newRequest.get(`/users/${userId}`).then((res) => {
  //       return res.data;
  //     }),

  //   enabled: !!userId,
  // });

  return (
    <div className="gig">
      {isLoading ? (
        <div className="gigContainer">
          <div className="gigLeft">
            <div className="gig-skeleton-breadcrumbs" />
            <div className="gig-skeleton-title" />
            <div className="gigUser">
              <div className="gig-skeleton-avatar" />
              <div className="gig-skeleton-text gig-skeleton-short" />
              <div className="gig-skeleton-stars" />
            </div>
            <div className="gigSlider">
              <div className="gig-skeleton-img" />
            </div>
            <div className="gig-skeleton-section" />
            <div className="gig-skeleton-section" />
          </div>
          <div className="gigRight">
            <div className="gig-skeleton-price" />
            <div className="gig-skeleton-shortdesc" />
            <div className="gig-skeleton-details" />
            <div className="gig-skeleton-features" />
            <div className="gig-skeleton-button" />
          </div>
        </div>
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="gigContainer">
          <div className="gigLeft">
            <span className="breadcrumbs">
              CodeLance {">"} {data.cat} {">"} Akshat Jalan
            </span>
            <h1>{data.title}</h1>
            <div className="gigUser">
              <img
                className="pp"
                src={data.images}
                alt=""
              />
              <span>Akshat Jalan</span>
              <div className="gigStars">
                <img src={star} alt="" />
                <span>{data.totalStars}</span>
              </div>
            </div>
            <div className="gigSlider">
              <img src={data.cover} alt="" />
            </div>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="gigSellerUser">
                <img
                  className="gigSellerImg"
                  src={data.images}
                  alt=""
                />
                <div className="gigInfo">
                  <span>Akshat Jalan</span>
                  <div className="gigStars">
                    <img src={star} alt="" />
                    <span>{data.totalStars}</span>
                  </div>
                  <button className="Buttons1">Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="boxItems">
                  <div className="boxItem">
                    <span>From</span>
                    <span>INDIA</span>
                  </div>
                  <div className="boxItem">
                    <span>Member since</span>
                    <span>Aug 2023</span>
                  </div>
                  <div className="boxItem">
                    <span>Avg. response time</span>
                    <span>4 hours</span>
                  </div>
                  <div className="boxItem">
                    <span>Last delivery</span>
                    <span>1 day</span>
                  </div>
                  <div className="boxItem">
                    <span>Languages</span>
                    <span>English</span>
                  </div>
                </div>
                <hr />
                <p>{data.desc}</p>
              </div>
            </div>
            <div className="reviews">
              <h2>Reviews</h2>
              <div className="reviewsItem">
                <div className="reviewUser">
                  <img
                    className="reviewUserpp"
                    src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="gigInfo">
                    <span>Garner David</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="gigStars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>4</span>
                </div>
                <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Fiverr. Communication
                  was amazing, each and every day he sent me images that I was
                  free to request changes to. They listened, understood, and
                  delivered above and beyond my expectations. I absolutely
                  recommend this gig, and know already that Ill be using it
                  again very very soon
                </p>
              </div>
              <hr />
              <div className="reviewsItem">
                <div className="reviewUser">
                  <img
                    className="reviewUserpp"
                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="gigInfo">
                    <span>Sidney Owen</span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                        alt=""
                      />
                      <span>Germany</span>
                    </div>
                  </div>
                </div>
                <div className="gigStars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <p>
                  The designer took my photo for my book cover to the next
                  level! Professionalism and ease of working with designer along
                  with punctuality is above industry standards!! Whatever your
                  project is, you need this designer!
                </p>
              </div>
              <hr />
              <div className="reviewsItem">
                <div className="reviewUser">
                  <img
                    className="reviewUserpp"
                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="gigInfo">
                    <span>Lyle Giles </span>
                    <div className="country">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                        alt=""
                      />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="gigStars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <p>
                  Amazing work! Communication was amazing, each and every day he
                  sent me images that I was free to request changes to. They
                  listened, understood, and delivered above and beyond my
                  expectations. I absolutely recommend this gig, and know
                  already that Ill be using it again very very soon
                </p>
              </div>
            </div>
          </div>
          <div className="gigRight">
            <div className="gigPrice">
              <h3>{data.cat}</h3>
              <h2>INR {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="gigDetails">
              <div className="gigItem">
                <img src={clock} alt="" height="20px" />
                <span>2 Days Delivery</span>
              </div>
              <div className="gigItem">
                <img src={recycle} alt="" height="20px" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="gigItem">
                <img className="checkIcon" src={check} alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="gigItem">
                <img className="checkIcon" src={check} alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="gigItem">
                <img className="checkIcon" src={check} alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="gigItem">
                <img className="checkIcon" src={check} alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <Link to={`/pay/${id}`}>
              <button className="continueButton">Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
