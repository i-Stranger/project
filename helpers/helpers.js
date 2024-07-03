export const plusDivs = (n) => {
  setSlideIndex((prev) => {
    let newIndex = prev + n;
    if (newIndex > 3) newIndex = 1;
    if (newIndex < 1) newIndex = 3;
    return newIndex;
  });
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setInput((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
