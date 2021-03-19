import React from "react";
import Layout from "../components/layout";
import Projects from "../components/projects";
import styles from "../css/projects-page.module.css";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

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
      <SEO title="Projects" />
      <section className={styles.projectsPage} id="projectDarkPage">
        <Projects projects={projects} title="Projects" id="opa" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
