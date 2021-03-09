import React from "react";
import Layout from "../components/layout";
import styles from "../css/about.module.css";
import Title from "../components/title";
import ReactMarkdown from "react-markdown";

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
      <section className={styles.aboutPage}>
        <div className={`${styles.sectionCenter} ${styles.aboutCenter}`}>
          {/* <Image
            fluid={image.childImageSharp.fluid}
            className={styles.aboutImg}
          /> */}
          <article className={styles.aboutText}>
            <Title title={title} className={styles.title} />
            <ReactMarkdown source={description} />
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default about;
