// import { Link } from "gatsby";
import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
import styles from "../css/sidebar.module.css";
import DarkMode from "../components/darkMode";
import disableScroll from "disable-scroll";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) {
    disableScroll.off();
  }

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.showSidebar : ""}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className={styles.sideContainer}>
        {/* //delay the animaation on isOpen true then apply the animation class */}
        <Links styleClass={`${isOpen ? styles.sidebarLinks : ""}`} />
        <SocialLinks styleClass={`${isOpen ? styles.sidebarIcons : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
