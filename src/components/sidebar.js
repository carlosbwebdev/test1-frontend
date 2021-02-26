import { Link } from "gatsby";
import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
import styles from "../css/sidebar.module.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className={styles.sideContainer}>
        <Links styleClass={styles.sidebarLinks} />
        <SocialLinks styleClass={styles.sidebarIcons} />
      </div>
    </aside>
  );
};

export default Sidebar;
