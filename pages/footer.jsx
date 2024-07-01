import React from "react";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Riezl Baker Real Estate</h1>
        <div className={styles.text}>
          <div className={styles.logodiv}>
            <h1>Lake Oconee Real Estate Expert</h1>
            <h1>Logo</h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              border: "1px black  ",
              justifyContent: "space-around",
              height: "60vh",
            }}
          >
            <div style={{ display: "flex", gap: "100px" }}>
              <h3>
                Email <br />
                <span style={{ textDecoration: "underline" }}>
                  RBAKER@LUXURYLAKEOCONEE.COM
                </span>
              </h3>
              <span>
                <h2>
                  Phone <br />
                  <span style={{ textDecoration: "underline" }}>
                    (706) 347-2625
                  </span>
                </h2>
              </span>
              <br />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <h3>
                Address <br />
                <span>1011 PARK LANE GREENSBORO, GA 30642</span>
              </h3>
              <h3>Quick Links</h3>
            </div>

            <p>
              All information deemed reliable but not guaranteed and should be
              independently reviewed and verified.
            </p>
          </div>
        </div>
        <hr style={{ width: "98%" }} />
      </div>
    </>
  );
};

export default Footer;
