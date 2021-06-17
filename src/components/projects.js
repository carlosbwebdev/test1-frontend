import React from "react";
import Title from "../components/title";
import styles from "../css/projects.module.css";
import Blog from "./blog";
import Project from "../components/project";
import { Link } from "gatsby";

export const Projects = ({ projects, title, subTitle, showLink }) => {
  return (
    <div className={styles.section}>
      <div className={styles.underline}></div>
      <Title title={title} />
      {subTitle && <h4 className={styles.subtitle}>Projectos em Destaque</h4>}

      <div className={`${styles.sectionCenter} ${styles.projectsCenter}`}>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects/" className={`${styles.btn} ${styles.centerBtn}`}>
          projectos
        </Link>
      )}
    </div>
  );
};

export default Projects;
