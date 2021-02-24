import React from "react";
import styles from "../css/title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{title || "default title"}</h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Title;
