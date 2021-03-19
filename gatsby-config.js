module.exports = {
  siteMetadata: {
    title: "developedByCarlos Website",
    author: "@Carlos_webdev",
    contact: "carlosbwebdev@gmail.com",
    description:
      "Freelance web designer and developer, based in the north of portugal",
    siteUrl: "https://developedbycarlos.netlify.app",
    image: "/twitter-card.png",
    twitterUsername: "@Carlos_webdev",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-developedbycarlos-netlify-app
`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://app01test.herokuapp.com`,
        // apiURL: `http://localhost:1337`,
        queryLimit: 5000,
        contentTypes: [`blogs`, `projects`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: "b7d23769c506d7fd8178",
          clientSecret: "b40d7c4a81299a55150aee6c5480e4b281668e5f",
          repo: "test1-frontend",
          owner: "carlosbwebdev",
          admin: ["carlosbwebdev"],
        },
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
