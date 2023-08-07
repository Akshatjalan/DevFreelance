import React from "react";
import Slides from "../components/Slides";
import CatCard from "../components/CatCard";
import { cards } from "../data.js";

function Home() {
  return (
    <>
      <div>
        <Slides slidesToShow={5} arrowsScroll={2}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slides>
      </div>
    </>
  );
}

export default Home;
