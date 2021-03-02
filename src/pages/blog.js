import React from "react";
import { graphql } from "gatsby";
import Blogs from "../components/blogs";
import Layout from "../components/layout";

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
      <section>
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  );
};

export default BlogPage;
