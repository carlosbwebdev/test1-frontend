import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import styles from "../css/hero.module.css";
import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid

const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <header className={styles.hero} id="herodark">
      <div className={`styles.sectionCenter ${styles.heroCenter}`}>
        <article className={styles.heroInfo}>
          <div>
            <div className={styles.underline}></div>
            <h1>i am Carlos!</h1>
            <h4 id="heroinfo">
              freelance web designer and developer, based in the north of
              portugal
            </h4>
            <Link to="/contact" className={styles.btn} id="btnDarkHover">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className={styles.heroImg} />
      </div>
    </header>
  );
};

export default Hero;
