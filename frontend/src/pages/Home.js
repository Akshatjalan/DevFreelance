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
          Discover Exciting Opportunites and Showcase Your skills
        </div>
        <div className="homeDesc">
          CodeLance is the ultimate freelance platform for coders and developers
          to find gigs and showcase their skills. Join codeLance community and
          unlock a world of exciting Opportunites
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
              Find and hire top-notch developers for your projects on CodeLance.
            </div>
            <div className="clientDesc">
              CodeLance provides a dedicated platform for clients to easily find
              and hire skilled developers for their gigs. With seamless
              communication and collaboration features, you can ensure
              successful project outcomes.
            </div>
          </div>
          <img src={freelancerPic} height="480px" alt="" />
        </div>
      </div>

      <div className="serviceContainer">
        <div className="serviceCont">
          <div className="serviceTitle">Our Services</div>
          <div className="projectsCards">
            {projects.map((item) => (
              <div className="projectsItems">
                <img
                  className="projectsImg"
                  src={item.img}
                  alt=""
                  width="400px"
                />
                <p>{item.cat}</p>
                {item.username}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
