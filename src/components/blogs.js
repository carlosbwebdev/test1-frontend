import React from "react";
import Title from "./title";
import Blog from "./blog";
import { Link } from "gatsby";
import styles from "../css/blogs.module.css";

export const Blogs = ({ blogs, title, subTitle, showLink }) => {
  console.log(blogs);
  return (
    <section
      className={styles.section}
      style={{
        background: "var(--bg)",
        color: "var(--textNormal)",
      }}
    >
      <div className={styles.underline}></div>
      <Title title={title} />
      {subTitle && <h4 className={styles.subtitle}>Latest Articles</h4>}
      <div className={`${styles.sectionCenter} ${styles.blogsCenter}`}>
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />;
        })}
      </div>
      {showLink && (
        <Link to="/blog/" className={`${styles.btn} ${styles.centerBtn}`}>
          blog
        </Link>
      )}
    </section>
  );
};

export default Blogs;
