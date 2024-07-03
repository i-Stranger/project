import React from "react";

export default function News() {
  return (
    <div className="news">
      <div className="newstext">
        <h1>In the News</h1>
        <p>
          We are excited to let the world know about everything we are up-to in
          both real estate and lifestyle. Catch us in the local news or in some
          of our favorite publications.
        </p>
        <button>View More</button>
      </div>
      <div className="newsimage">
        <img src="/8.jpeg" alt="" height="500px" width="600px" />
      </div>
    </div>
  );
}
