import React from "react";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import Layout from "../components/layout";
import styles from "../css/allblogs.module.css";

export const query = graphql`
  {
    allStrapiBlogs {
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

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className={styles.blogPages}>
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  );
};

export default Blog;
