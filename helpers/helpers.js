import { useState } from "react";

const handleChange = (e) => {
  const { name, value } = e.target;
  setInput((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
