import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styles from "../css/blog-template.module.css";
import ReactMarkdown from "react-markdown";
import Title from "../components/title";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { content, title } = data.blog;

  return (
    <Layout>
      <section className={styles.blogTemplate} id="blogTemplateDark">
        <div className={styles.sectionCenter}>
          <Title title={title} className={styles.title} />
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
