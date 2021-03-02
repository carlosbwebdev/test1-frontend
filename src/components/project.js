import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import styles from "../css/project.module.css";

const Project = ({ title, image, id, github, url }) => {
  return (
    <div className={styles.container} key={id}>
      <Image fluid={image.childImageSharp.fluid} className={styles.boxImg} />
      <div className={styles.box}>
        <div className={styles.text}>
          <span>{title}</span>
          <a className={styles.boxLink} href={url}>
            See live!
          </a>
          <a className={styles.boxLink} href={github}>
            github repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
