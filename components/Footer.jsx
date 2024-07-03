import React from "react";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "@/data/data";
const Footer = () => {
  return (
    <footer className={styles.main}>
      <h1>Riezl Baker Real Estate</h1>
      <div className={styles.text}>
        <div className={styles.logodiv}>
          <h1>Lake Oconee Real Estate Expert</h1>
          <div className={styles.logo}>Logo</div>
        </div>
        <div className={styles.emailmain}>
          <div className={styles.email}>
            <h3>Email</h3>
            <p>RBAKER LUXURY LAKE OCONEE.COM</p>
            <h2>Phone</h2>
            <p className={styles.phone}>(706) 347-2625</p>
          </div>
          <div className={styles.address}>
            <h3>Address</h3>
            <p>1011 PARK LANE GREENSBORO, GA 30642</p>
            <h3>Quick Links</h3>
          </div>
          <p className={styles.disclaimer}>
            All information deemed reliable but not guaranteed and should be
            independently reviewed and verified.
          </p>
        </div>
      </div>
      <hr className={styles.separator} />

      <div className={styles.sponsor}>
        <div className={styles.sponsers}>
          <p>
            Powered by <span>Luxury Presence</span>
          </p>
          <p>
            Copyright © 2024 <span>| Privacy Policy </span>
          </p>
        </div>
      </div>
      <div className={styles.icons}>
        {data?.icons.map((item, index) => (
          <div key={index} className={styles.icon}>
            <FontAwesomeIcon icon={item.icon} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
