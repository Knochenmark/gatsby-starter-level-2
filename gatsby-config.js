module.exports = {
  pathPrefix: '/gatsby-starter-level-2',
  siteMetadata: {
    title: 'Level 2',
    titleTemplate: '%s · Level 2',
    image: '/images/logo.png',
    author: 'Max Mustermann',
    description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
    url: 'https://knochenmark.github.io',
    paginationPageSize: 4, // Amount of posts displayed per listing page.
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'hero',
        path: `${__dirname}/content/sections/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about',
        path: `${__dirname}/content/sections/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'cards',
        path: `${__dirname}/content/sections/cards`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'contact',
        path: `${__dirname}/content/sections/contact`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
