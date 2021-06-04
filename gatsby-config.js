const searchIndexes = require("./search-indexes");

module.exports = options => {
  const {
    contentPath = './notes'
  } = options;
  return {
    siteMetadata: {
      title: `wtfsby`,
      description: `wtfsby will make you break fast`,
      siteUrl: `https://sby.kerrbear.wtf`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-theme-ui`,
        options: {
          prismPreset: 'night-owl',
          preset: '@theme-ui/preset-funk',
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          icon: "./images/icon.png",
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-remark-images`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-double-brackets-link`,
              options: {
                stripBrackets: true
              },
            },
            "gatsby-remark-double-parenthesis-link",
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 561,
              },
            },
            `gatsby-remark-copy-linked-files`,
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                icon: false,
              },
            },
          ],
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: contentPath,
          path: contentPath,
        },
        __key: contentPath
      },
      `gatsby-transformer-markdown-references`,
      ...searchIndexes(options),
    ]
  }
};
