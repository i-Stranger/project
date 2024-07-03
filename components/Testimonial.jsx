import React, { useEffect, useState } from "react";
import { plusDivs } from "@/helpers/helpers";
export default function Testimonial() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const x = document.getElementsByClassName("mySlides");

    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    if (x[slideIndex - 1]) x[slideIndex - 1].style.display = "block";
  }, [slideIndex]);

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
        <button className="nextprev" onClick={() => plusDivs(-1)}>
          ❮{" "}
        </button>
        <button className="nextprev " onClick={() => plusDivs(1)}>
          {" "}
          ❯
        </button>
      </div>
    </div>
  );
}
