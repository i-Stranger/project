import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
      <div className={`${styles.nav} ${scrollNav ? styles.scrolled : ""}`}>
        <h1>Logo</h1>
        <div className={styles.navbuttonmain}>
          <div className={styles.buttons}>
            <button className={styles.button}>Home</button>
            <button className={styles.button}>About</button>
            <button className={styles.button}>Blog</button>
            <button className={styles.button}>Properties</button>
            <button className={styles.button}>Let's Connect</button>
          </div>
          <span className={styles.span} onClick={openNav}>
            open
          </span>
        </div>
      </div>
      <div id="mySidenav" className={styles.sidenav}>
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={closeNav}
        >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
};

export default Navbar;
