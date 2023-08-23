import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import "../styles/Gig.css";
import clock from "../assets/clock.png";
import recycle from "../assets/recycle.png";
import check from "../assets/check.png";

function Gig() {
  return (
    <div className="gig">
      <div className="gigContainer">
        <div className="gigLeft">
          <span className="breadcrumbs">
            CodeLance ➤ UI/UX Design ➤ Akshat Jalan
          </span>
          <h1>I will create UI/UX design for you</h1>
          <div className="gigUser">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Akshat Jalan</span>
            <div className="gigStars">
              <span>5 Star</span>
            </div>
          </div>
          {/* <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider> */}
          <h2>About This Gig</h2>
          <p>
            I use an UI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="gigUser">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="gigInfo">
                <span>Akshat Jalan</span>
                <div className="gigStars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button className="Buttons1">Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="boxItems">
                <div className="boxItem">
                  <span className="title">From</span>
                  <span className="desc">INDIA</span>
                </div>
                <div className="boxItem">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2023</span>
                </div>
                <div className="boxItem">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="boxItem">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="boxItem">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Akshat, I enjoy creating UI/UX generated art in my
                spare time. I have a lot of experience using the UI/UX and will
                provide incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="reviewsItem">
              <div className="gigUser">
                <img
                  className="pp"
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
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="reviewsItem">
              <div className="gigUser">
                <img
                  className="pp"
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
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="reviewsItem">
              <div className="gigUser">
                <img
                  className="pp"
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
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gigRight">
          <div className="gigPrice">
            <h3>UI/UX Designs</h3>
            <h2>INR 600</h2>
          </div>
          <p>
            I will create a unique high quality UI/UX design based on a
            description that you give me
          </p>
          <div className="gigDetails">
            <div className="gigItem">
              <img src={clock} alt="" height="20px" />
              <span>2 Days Delivery</span>
            </div>
            <div className="gigItem">
              <img src={recycle} alt="" height="20px" />
              <span>3 Revisions</span>
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
          <button className="Buttons">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
