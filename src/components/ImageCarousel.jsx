// import React, { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// import "./ImageCarousel.css";

// export const ImageCarousel = ({ data }) => {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     setSlide(slide === data.length - 1 ? 0 : slide + 1);
//   };

//   const prevSlide = () => {
//     setSlide(slide === 0 ? data.length - 1 : slide - 1);
//   };

//   return (
//     <div className="carousel">
//       <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
//       {data.map((item, idx) => {
//         return (
//           <img
//             src={item.src}
//             alt={item.alt}
//             key={idx}
//             className={slide === idx ? "slide" : "slide slide-hidden"}
//           />
//         );
//       })}
//       <BsArrowRightCircleFill
//         onClick={nextSlide}
//         className="arrow arrow-right"
//       />
//       <span className="indicators">
//         {data.map((_, idx) => {
//           return (
//             <button
//               key={idx}
//               className={
//                 slide === idx ? "indicator" : "indicator indicator-inactive"
//               }
//               onClick={() => setSlide(idx)}
//             ></button>
//           );
//         })}
//       </span>
//     </div>
//   );
// };
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageCarousel.css";

export const ImageCarousel = ({ data, slidesToShow = 3}) => { // **Added slidesToShow prop, defaulting to 3**
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev + slidesToShow >= data.length ? 0 : prev + slidesToShow)); // **Updated logic for sliding by slidesToShow**
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - slidesToShow < 0 ? data.length - slidesToShow : prev - slidesToShow)); // **Updated logic for sliding by slidesToShow**
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

      <div className="carousel-inner" style={{transform: `translateX(-${(slide / data.length) * 100}%)` }}> 
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className="slide"
            style={{flex: `0 0 ${100 / slidesToShow}%`}} // **Adjusted slide width to display multiple items**
          />
        ))}
      </div>

      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

      <span className="indicators">
        {Array.from({ length: Math.ceil(data.length / slidesToShow) }).map((_, idx) => (
          <button
            key={idx}
            className={slide / slidesToShow === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx * slidesToShow)} // **Updated indicator logic for multiple slides**
          ></button>
        ))}
      </span>
    </div>
  );
};
