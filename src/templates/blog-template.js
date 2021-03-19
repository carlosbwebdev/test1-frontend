import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styles from "../css/blog-template.module.css";
import ReactMarkdown from "react-markdown";
import Title from "../components/title";
import SEO from "../components/SEO";
// import Comment from "../components/comment";
import Gitalk from "gatsby-plugin-gitalk";
import "@suziwen/gitalk/dist/gitalk.css";

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      slug
      id
    }
  }
`;

const BlogTemplate = ({ data }) => {
  const { content, title, desc, slug, id } = data.blog;
  let gitalkConfig = {
    id: slug || id,
    title: frontmatter.title,
  };
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className={styles.blogTemplate} id="blogTemplateDark">
        <Title title={title} className={styles.title} />
        <div className={styles.underline}></div>
        <div className={styles.sectionCenter}>
          <article className={styles.blogContent}>
            <ReactMarkdown source={content} />
          </article>
          <Gitalk options={gitalkConfig} />
          <Link to="/blog" className={`${styles.btn} ${styles.centerBtn}`}>
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogTemplate;
