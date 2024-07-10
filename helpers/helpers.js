import { useEffect } from "react";

export const Effect = (slideIndex) => {
  useEffect(() => {
    const x = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i];
    }
    if (x[slideIndex - 1]) x[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1];
  }, [slideIndex]);
};

export const plusDivs = (n, setSlideIndex) => {
  setSlideIndex((prev) => {
    let newIndex = prev + n;
    if (newIndex > 3) newIndex = 1;
    if (newIndex < 1) newIndex = 3;
    return newIndex;
  });
};

export const handleChange = (e, setInput) => {
  const { name, value } = e.target;
  setInput((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
