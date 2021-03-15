import React from "react";
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
// import DarkMode from "../components/darkMode";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.navbar} id="navbarDark">
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <a href="/">
            <h1>developedByCarlos</h1>
          </a>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass={styles.navLinks}></PageLinks>
      </div>
      {/* <DarkMode styleClass={styles.darkModeBtn} /> */}
    </nav>
  );
};

export default Navbar;
