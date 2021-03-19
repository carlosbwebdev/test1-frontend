import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styles from "../css/blog-template.module.css";
import ReactMarkdown from "react-markdown";
import Title from "../components/title";
import SEO from "../components/SEO";
// import Comment from "../components/comment";
// import Gitalk from "gatsby-plugin-gitalk";
// import "@suziwen/gitalk/dist/gitalk.css";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";

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
  // let gitalkConfig = {
  //   id: slug || id,
  //   title: title,
  // };
  let disqusConfig = {
    url: `${slug + location.pathname}`,
    identifier: id,
    title: title,
  };
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className={styles.blogTemplate} id="blogTemplateDark">
        <Title title={title} className={styles.title} />
        <div className={styles.underline}></div>
        <div className={styles.sectionCenter}>
          <article className={styles.blogContent}>
            <CommentCount config={disqusConfig} placeholder={"..."} />
            <ReactMarkdown source={content} />
            <Disqus config={disqusConfig} />
          </article>
          {/* <Disqus
            identifier={id}
            title={title}
            url={`${siteUrl}${location.pathname}`}
          /> */}
          {/* <Gitalk options={gitalkConfig} /> */}
          <Link to="/blog" className={`${styles.btn} ${styles.centerBtn}`}>
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogTemplate;
