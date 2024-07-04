import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "@/data/data";

export default function Riezel() {
  return (
    <div className="riezelmain">
      <div className="riezel">
        <div className="riezelimage">
          <img src="4.jpeg" alt="" style={{ height: "100%", width: "100%" }} />
          <div className="icons">
            {data?.icons.map((item, index) => {
              return (
                <div key={index} className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="reizeltext">
          <h1>Meet Reizel</h1>
          <hr style={{ width: "90%", marginTop: "20px" }} />
          {data?.riezeltext.map((item) => {
            return <h3>{item}</h3>;
          })}
          <a
            style={{
              marginTop: "90px",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "900",
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
