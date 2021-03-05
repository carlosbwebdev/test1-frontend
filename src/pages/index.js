import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import Projects from "../components/projects";
// import Sidebar from "./sidebar";
export const query = graphql`
  {
    allStrapiBlogs(limit: 3, sort: { fields: id, order: DESC }) {
      nodes {
        slug
        title
        id
        content
        category
        date(formatString: "Do MMMM, YYYY")
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        github
        description
        title
        url
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiProjects: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latests articles" showLink />
    </Layout>
  );
};
