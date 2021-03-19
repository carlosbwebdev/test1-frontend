import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
  {
    site {
      siteMetadata {
        author
        contact
        siteDesc: description
        siteUrl
        siteTitle: title
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;

  return (
    <Helmet title={`${title} | ${siteTitle} `} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  );
};

export default SEO;
