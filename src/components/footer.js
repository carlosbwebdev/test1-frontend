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
          <span> DevelopedByCarlos </span>
          todos os direitos reservados.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
