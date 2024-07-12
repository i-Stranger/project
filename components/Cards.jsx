import React, { useEffect, useState } from "react";
import { data } from "@/data/data";

export default function Cards() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    // Define the interval function
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber < 2023) {
          return prevNumber + 1;
        } else {
          clearInterval(intervalId); // Stop the interval when the number reaches 2023
          return prevNumber;
        }
      });
    }, 1);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="cardsmain">
      <div className="cards">
        {data?.cards.map((item, index) => (
          <div key={index} className="card22">
            <div className="cardtext">
              <h1 style={{ color: "#f4cd82" }}>{number}</h1>
              <h3>{item.production}</h3>
            </div>
            <div className="cardimage">
              <img
                src={item.image}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
              <h3>{item.text}</h3>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
