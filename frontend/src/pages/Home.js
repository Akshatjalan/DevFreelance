import React from "react";
import Slides from "../components/Slides";
import CatCard from "../components/CatCard";
import { cards } from "../data.js";
// import { projects } from "../data.js";
// import { Link } from "react-router-dom";
import "../styles/Home.css";
import freelancerPic from "../assets/undraw_Designer.png";
import WhyChoosePic from "../assets/undraw_My_answer.png";
import check from "../assets/check.png";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeTitle">
          Hire perfect developers for your projects.
        </div>
        <div className="homeDesc">
          CodeLance provides a dedicated platform for clients to easily find and
          hire skilled developers for their gigs. With seamless communication
          and collaboration features, you can ensure successful project
          outcomes.
        </div>
        <button className="homeButtons">Hire Developers</button>
      </div>

      <div className="SlideContainer">
        <>
          <div className="SlideTitle">Our Freelance Services</div>
          <Slides slidesToShow={5} arrowsScroll={2}>
            {cards.map((card) => (
              <CatCard key={card.id} card={card} />
            ))}
          </Slides>
        </>
      </div>

      <div className="chooseContainer">
        <div className="chooseCont">
          <img className="choosetImg" src={WhyChoosePic} alt="" />
          <div>
            <div className="chooseTitle">Why Choose CodeLance Services?</div>

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
                  <img className="checkIcon" src={check} alt="" /> Need it
                  urgently? Opt for our expedited delivery option (T&C applied).
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
            <button className="clientButtons">Join as Developer</button>
          </div>
          <img className="clientImg" src={freelancerPic} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
