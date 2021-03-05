// import { Link } from "gatsby";
import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
import styles from "../css/sidebar.module.css";
import ReactDOM from "react-dom";
import Layout from "../components/layout";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // if (!isOpen) {
  //   ReactDOM.render(
  //     (document.getElementsByTagName("body").style.overflow = "hidden")
  //   );
  // }

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
