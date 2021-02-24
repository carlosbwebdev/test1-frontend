import React from "react";
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import Link from "gatsby";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <a href="/">
            <h1>developedByCarlos</h1>
          </a>
          <button type="button" className={styles.toggleBtn}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass={styles.navLinks}></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
