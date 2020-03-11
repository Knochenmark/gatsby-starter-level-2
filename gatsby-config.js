module.exports = {
  pathPrefix: '/gatsby-starter-level-2',
  siteMetadata: {
    title: 'Level 2',
    description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
    author: 'Max Mustermann',
    tagline: 'Design. Code. Experiment',
    heroIntroduction: "hey it's me",
    heroDescription: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.`,
    ctaLink: {
      label: 'View Documentation',
      link: 'https://github.com/Knochenmark/gatsby-starter-level-2/blob/master/README.md',
    },
    paginationPageSize: 4,
    contact: {
      phone: '+49 1234 5678910',
      email: 'maxmustermann@gmail.com',
      address: 'Friesenstr. 123, Berlin, Germany',
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore
      et dolore magna aliquyam erat, sed diam voluptua.`,
    },
    menuLinks: [
      {
        name: 'About',
        link: '/#about',
      },
      {
        name: 'Projects',
        link: '/#projects',
      },
      // TODO: Uncomment once done or for development
      // {
      //   name: 'Blog',
      //   link: '/#blog',
      // },
      {
        name: 'Contact',
        link: '/#contact',
      },
      // Uncomment for development purposes
      // {
      //   name: 'Tags',
      //   link: '/tags',
      // },
    ],
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
        name: 'about',
        path: `${__dirname}/content/about`,
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
