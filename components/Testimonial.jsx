import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/carousel.module.css"; // Import the CSS module

const CarouselComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex(next),

    appendDots: (dots) => (
      <div className={styles.dotsContainer}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={styles.carouselmain}>
      <div className={styles.carouselWrapper}>
        <h2> Testimonial </h2>
        <Slider style={{ marginTop: "40px" }} ref={sliderRef} {...settings}>
          <div>
            <img
              src="5.jpg"
              alt="Slide 1"
              style={{ height: "500px", width: "100%" }}
            />
          </div>
          <div>
            <img
              src="6.jpg"
              alt="Slide 2"
              style={{ height: "500px", width: "100%" }}
            />
          </div>
          <div>
            <img
              src="7.jpg"
              alt="Slide 3"
              style={{ height: "500px", width: "100%" }}
            />
          </div>
          <div>
            <img
              src="5.jpg"
              alt="Slide 4"
              style={{ height: "500px", width: "100%" }}
            />
          </div>
        </Slider>
        <div className={styles.arrowsContainer}>
          <button
            className={styles.arrow}
            onClick={() => sliderRef.current.slickPrev()}
          >
            Prev
          </button>
          <button
            className={styles.arrow}
            onClick={() => sliderRef.current.slickNext()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
