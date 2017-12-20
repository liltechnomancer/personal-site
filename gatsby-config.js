module.exports = {
  siteMetadata: {
    title: "Lvrbrtsn"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          }
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sharp",
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
