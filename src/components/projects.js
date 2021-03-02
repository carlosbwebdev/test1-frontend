import React from "react";
import Title from "../components/title";
import styles from "../css/projects.module.css";
import Blog from "./blog";
import Project from "../components/project";
import { Link } from "gatsby";

export const Projects = ({ projects, title, showLink }) => {
  console.log(projects);
  return (
    <div className={styles.section}>
      <Title title={title} />
      <div className={`${styles.sectionCenter} ${styles.projectsCenter}`}>
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects/" className={`${styles.btn} ${styles.centerBtn}`}>
          projects
        </Link>
      )}
    </div>
  );
};

export default Projects;
