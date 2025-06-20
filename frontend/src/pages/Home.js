import React from "react";
import CatCard from "../components/CatCard";
import { cards } from "../data.js";
// import { projects } from "../data.js";
// import { Link } from "react-router-dom";
import "../styles/Home.css";
import freelancerPic from "../assets/undraw_Designer.png";
import WhyChoosePic from "../assets/undraw_My_answer.png";
import heroImg from "../assets/undraw_team_page.svg";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeTitle">
          Hire perfect <span>Developers</span> for your projects<span>.</span>
        </div>
        <div className="homeDesc">
          CodeLance provides a dedicated platform for clients to easily find and
          hire skilled developers for their gigs. With seamless communication
          and collaboration features, you can ensure successful project
          outcomes.
        </div>
        <img className="heroLeftImg" src={heroImg} alt="heroImg" />
        <img className="heroRightImg" src={heroImg} alt="heroImg" />
        <Link to="/gigs?cat">
          <button className="homeButtons">Find your next Hire</button>
        </Link>
      </div>

      <div className="SlideContainer">
        <>
          <div className="SlideTitle">
            Our <span>Freelance</span> Services<span>.</span>
          </div>
          {/* <div className="SlideCards">
            {cards.map((card) => (
              <CatCard key={card.id} card={card} />
            ))}
          </div> */}
          <div className="SlideCards">
            <div className="SlideCardsInner">
              {cards.map((card, idx) => (
                <CatCard key={"first-" + card.id} card={card} />
              ))}
              {cards.map((card, idx) => (
                <CatCard key={"second-" + card.id} card={card} />
              ))}
            </div>
          </div>
        </>
      </div>

      <div className="chooseContainer">
        <div className="chooseCont">
          <img className="choosetImg" src={WhyChoosePic} alt="" />
          <div>
            <div className="chooseTitle">
              Why Choose <span>CodeLance?</span>
            </div>

            <div className="chooseDesc">
              <ul className="points">
                <li>
                  <img className="checkIcon" src={check} alt="" /> Find
                  developers with the exact skills your project needs, ensuring
                  high-quality results.
                </li>
                <li>
                  <img className="checkIcon" src={check} alt="" /> Get one free
                  revision with every project, ensuring satisfaction.
                </li>
                <li>
                  <img className="checkIcon" src={check} alt="" /> Your Payment
                  isn't released until you approve the work.
                </li>
                <li>
                  <img className="checkIcon" src={check} alt="" /> Real-time
                  code collaboration and direct communication for seamless
                  execution.
                </li>
                <li>
                  <img className="checkIcon" src={check} alt="" />
                  Trustworthy payment gateway for worry-free transactions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="clientContainer">
        <div className="clientCont">
          <div>
            <div className="clientTitle">
              Discover Exciting Opportunites and Showcase Your skills
            </div>

            <div className="clientDesc">
              CodeLance is the ultimate freelance platform for coders and
              developers to find gigs and showcase their skills. Join codeLance
              community and unlock a world of exciting Opportunites
            </div>
            <Link to="/register">
              <button className="clientButtons">Join as Developer</button>
            </Link>
          </div>
          <img className="clientImg" src={freelancerPic} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
