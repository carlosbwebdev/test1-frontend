module.exports = {
  siteMetadata: {
    title: "developedByCarlos Web Site",
    author: "@CarlosBarros",
    contact: "carlosbwebdev@gmail.com",
    siteUrl: "https://needstobetheproductionurl.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://app01test.herokuapp.com`,
        queryLimit: 5000,
        contentTypes: [`blogs`, `projects`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
            // {
            //   family: "Poppins",
            //   variants: ["100", "200", "300", "400", "500", "600", "700"],
            // },
            {
              family: "Michroma",
              variants: ["400"],
            },
          ],
        },
      },
    },
  ],
};
