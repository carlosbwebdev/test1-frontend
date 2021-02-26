import React from "react";
import Title from "./title";
import Blog from "./blog";
import { Link } from "gatsby";
import styles from "../css/blogs.module.css";

export const Blogs = ({ blogs, title, showLink }) => {
  console.log(blogs);
  return (
    <section className={styles.section}>
      <Title title={title} />
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
