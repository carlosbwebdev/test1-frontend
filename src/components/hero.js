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
            <h1>Olá eu sou o Carlos!</h1>
            <h4 id="heroinfo">
              Freelancer em Desenvolvimento Web, Desenvolvo Websites
              Profissionais com Extrema Paixão e Profissionalismo.
            </h4>
            <Link to="/contact" className={styles.btn} id="btnDarkHover">
              contacta-me
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
