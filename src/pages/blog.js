import React from "react";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import Layout from "../components/layout";
import styles from "../css/blogs-page.module.css";
import SEO from "../components/SEO";

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

const BlogPage = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className={styles.blogsPage}>
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  );
};

export default BlogPage;
