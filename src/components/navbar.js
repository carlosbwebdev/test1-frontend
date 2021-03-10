import React from "react";
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

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
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label styleClass={styles.navLinks}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
              </label>
            )}
          </ThemeToggler>
        </div>

        <PageLinks styleClass={styles.navLinks}></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;
