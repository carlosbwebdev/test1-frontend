import React from "react";
import Layout from "../components/layout";
import styles from "../css/about.module.css";
import Title from "../components/title";
import ReactMarkdown from "react-markdown";
import Skills from "../components/skills";

// import Image from "gatsby-image";

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        description
      }
    }
  }
`;

const about = ({
  data: {
    about: { nodes },
  },
}) => {
  const { description, stack, title, image } = nodes[0];
  return (
    <Layout>
      <section className={styles.aboutPage} id="aboutPageDark">
        <div className={`${styles.sectionCenter} ${styles.aboutCenter}`}>
          <article className={styles.aboutText}>
            <div className={styles.underline}></div>
            <Title title={title} className={styles.title} />
            <ReactMarkdown source={description} className={styles.desc} />
          </article>
          <Skills className={styles.skills} />
        </div>
      </section>
    </Layout>
  );
};

export default about;
