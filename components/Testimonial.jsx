import React, { useState } from "react";
import { Effect, plusDivs } from "@/helpers/helpers";

export default function Testimonial() {
  const [slideIndex, setSlideIndex] = useState(1);

  Effect(slideIndex); // Pass slideIndex to the Effect

  return (
    <div className="testimonial">
      <h1>Testimonial</h1>
      <div className="sliderimages">
        <img
          className="mySlides"
          src="5.jpg"
          style={{ width: "100%", height: "500px" }}
        />
        <img
          className="mySlides"
          src="6.jpg"
          style={{ width: "100%", height: "500px" }}
        />
        <img
          className="mySlides"
          src="7.jpg"
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      <div className="sliderbuttons">
        <button
          className="nextprev"
          onClick={() => plusDivs(-1, setSlideIndex)}
        >
          ❮
        </button>
        <button className="nextprev" onClick={() => plusDivs(1, setSlideIndex)}>
          ❯
        </button>
      </div>
    </div>
  );
}
