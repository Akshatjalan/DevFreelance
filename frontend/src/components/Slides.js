import React from "react";
import "../styles/Slides.css";
import Slider from "infinite-react-carousel";

const Slides = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="slideContainer">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
