import React, { useState, useEffect } from "react";
import styles from "../styles/slider.module.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = ["5.jpg", "6.jpg", "7.jpg", "5.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 9000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = (n) => {
    let newIndex = n;
    if (newIndex >= slides.length / 2) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = Math.floor(slides.length / 2) - 1;
    }
    setSlideIndex(newIndex);
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  return (
    <div className={styles.carouselmain}>
      <div className={styles.carousel}>
        <p style={{ fontSize: "40px" }}> Lake Oconee Real Estate for Sale</p>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slideContainer}>
              <img
                className={styles.mySlides}
                src={slide}
                alt={`Slide ${index + 1}`}
              />
              <button className={styles.carouselButton}>View Property</button>
            </div>
          ))}
        </div>
        <div className={styles.carouselControls}>
          <div
            className={`${styles.carouselControl} ${styles.prev}`}
            onClick={() => plusSlides(-1)}
          >
            Next{" "}
          </div>
          <div
            className={`${styles.carouselControl} ${styles.next}`}
            onClick={() => plusSlides(1)}
          >
            Previous
          </div>
        </div>
        <button className={styles.lastbutton}>View All</button>
      </div>
    </div>
  );
};

export default Carousel;
