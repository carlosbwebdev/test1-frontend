import React from "react";
import styles from "../css/footer.module.css";
import SocialLinks from "../constants/socialLinks";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <SocialLinks styleClass={styles.footerLinks} />
        <h4>
          Copyright&copy;{new Date().getFullYear()}
          <span> developedByCarlos </span>
          All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
