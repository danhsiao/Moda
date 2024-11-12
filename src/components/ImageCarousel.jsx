import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageCarousel.css";

export const ImageCarousel = ({ data, slidesToShow = 3 }) => { 
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1 >= data.length ? 0 : prev + 1)); // Increment by 1 to show each image individually
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1)); // Decrement by 1 to show each image individually
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

      <div 
        className="carousel-inner" 
        style={{ transform: `translateX(-${(slide * 100) / slidesToShow}%)` }}
      > 
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className="slide"
            style={{ flex: `0 0 ${100 / slidesToShow}%` }} // Adjusts width for each slide based on slidesToShow
          />
        ))}
      </div>

      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

      <span className="indicators">
        {Array.from({ length: data.length }).map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)} // Set slide directly when indicator clicked
          ></button>
        ))}
      </span>
    </div>
  );
};

