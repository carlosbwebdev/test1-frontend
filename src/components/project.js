import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import styles from "../css/project.module.css";

const Project = ({ title, image, id, github, url }) => {
  return (
    <div className={styles.container} key={id} id="projectDark">
      <Image
        fluid={image.childImageSharp.fluid}
        className={`${styles.boxImg}${"imgDark"}`}
      />
      <div className={styles.box}>
        <div className={styles.text}>
          <span>{title}</span>
          <a className={styles.boxLink} href={url}>
            ir para...
          </a>
          <a className={styles.boxLink} href={github}>
            repositorio github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
