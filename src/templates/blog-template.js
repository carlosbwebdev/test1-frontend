import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styles from "../css/blog-template.module.css";
import ReactMarkdown from "react-markdown";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { content } = data.blog;

  return (
    <Layout>
      <section className={styles.blogTemplate}>
        <div className={styles.sectionCenter}>
          <article className={styles.blogContent}>
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className={`${styles.btn} ${styles.centerBtn}`}>
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogTemplate;
