import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
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
  }
`;

export default ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <Hero />
      <Services />
      <Blogs blogs={blogs} title="latests articles" showLink />
    </Layout>
  );
};
