import React from "react";
import Layout from "../components/layout";
import Projects from "../components/projects";
import styles from "../css/projects-page.module.css";
import { graphql } from "gatsby";
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        github
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className={styles.projectsPage}>
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;