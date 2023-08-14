import React from "react";
import Slides from "../components/Slides";
import CatCard from "../components/CatCard";
import { cards } from "../data.js";
import { projects } from "../data.js";
import "../styles/Home.css";
import logo from "../assets/clientFreelancer.png";
import freelancerPic from "../assets/undraw_Designer.png";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeTitle">
          Hire top-notch developers for your projects on CodeLance.
        </div>
        <div className="homeDesc">
          CodeLance provides a dedicated platform for clients to easily find and
          hire skilled developers for their gigs. With seamless communication
          and collaboration features, you can ensure successful project
          outcomes.
        </div>
      </div>

      <div>
        <Slides slidesToShow={5} arrowsScroll={2}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slides>
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
            <button className="Buttons">Become Developer</button>
          </div>
          <img src={freelancerPic} height="480px" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
