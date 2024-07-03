import React from "react";
import { data } from "@/data/data";

export default function Cards() {
  return (
    <div className="cards">
      {data?.cards.map((item, index) => (
        <div key={index} className="card22">
          <div className="cardtext">
            <h1>{item.year}</h1>
            <h3>{item.production}</h3>
          </div>
          <div className="cardimage">
            <img
              src={item.image}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                backgroundAttachment: "fixed",
              }}
            />
            <h3>{item.text}</h3>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}
