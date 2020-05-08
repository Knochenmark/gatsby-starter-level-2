[![Build Status](https://travis-ci.com/Knochenmark/gatsby-starter-level-2.svg?branch=master)](https://travis-ci.com/Knochenmark/gatsby-starter-level-2)
[![GitHub issues](https://img.shields.io/github/issues/knochenmark/gatsby-starter-level-2.svg)](https://github.com/Knochenmark/gatsby-starter-level-2/issues)
[![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/knochenmark/gatsby-starter-level-2.svg)](https://github.com/Knochenmark/gatsby-starter-level-2/pulls)
![GitHub contributors](https://img.shields.io/github/contributors/knochenmark/gatsby-starter-level-2.svg)
![GitHub top language](https://img.shields.io/github/languages/top/knochenmark/gatsby-starter-level-2.svg)

<p align="center">
  <img alt="Level 2" src="./src/assets/logo.svg" width="140" />
</p>
<h1 align="center">
  Gatsby Starter Portfolio: Level 2
</h1>

<h4>
  A minimalistic, responsive and easily configurable <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a> starter that will help to bring your portfolio to the next level.
</h4>

That's why we like to call our starter **Level 2** or short **LvL2**. The starter comes with several prepared info sections for your portfolio that can be easily configured with the main Gatsby configuration files. For content creation we are using **Markdown** files with Frontmatter attributes that can be easily edited or created.

# Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Customize](#customize)
  - [Gatsby Configuration](#gatsby-configuration)
  - [Change the Theme](#change-the-theme)
  - [Icons](#icons)
    - [Navigation](#navigation)
    - [Social](#social)
- [Content Creation](#content-creation)

# Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the _level-2_ starter.

    ```shell
    # create a new Gatsby site using the level-2 starter
    gatsby new my-portfolio https://github.com/Knochenmark/gatsby-starter-level-2
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-portfolio/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-portfolio` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

# Features

- Responsive Layout
- High configurability
- Configurable Sections
  - Hero
  - About
  - Featured Projects
  - Contact
- Social Links
- Styled Components with Emotion
- Organized Projects by techs and Blog Posts by tags
- Posts in Markdown
  - Syntax highlighting in code blocks
- Pagination support
- More to come!

# Customize

## Gatsby Configuration

To make it easy for you we made sure you can configure as much as possible with the `gatsby-config.js` already.
All you have to do is change the relevant values. For reference you can find an overview of the config below:

```js
siteMetadata: {
  title: 'Level 2',
  author: 'Max Mustermann',
  description: 'Gatsby starter to quickly setup your portfolio and boost it to the next level.',
  paginationPageSize: 4, // Amount of posts displayed per listing page.
  // Config for the hero section
  hero: {
    introduction: "hey it's me",
    tagline: 'Design. Code. Experiment',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore
    et dolore magna aliquyam erat, sed diam voluptua.`,
    // Config for the Call to Action button (both props must be truthy strings)
    ctaLabel: 'View Documentation',
    ctaLink: 'https://github.com/Knochenmark/gatsby-starter-level-2/blob/master/README.md',
  },
  contact: {
    phone: '+49 1234 5678910',
    email: 'maxmustermann@gmail.com',
    address: 'Friesenstr. 123, Berlin, Germany',
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore
    et dolore magna aliquyam erat, sed diam voluptua.`,
  },
  // Config for the navigation links
  menuLinks: [
    {
      name: 'About',
      link: '/#about',
    },
    {
      name: 'Projects',
      link: '/#projects',
    },
    {
      name: 'Contact',
      link: '/#contact',
    },
  ],
},
```

## Icons

Under `src/components/_config` you will find further files that allow for configuration of _social_ and _navigation_ icons.

### Navigation

In `src/components/_config/get-menu-icon.js` you have to adjust the map in case you've added further navigation links, when
you want to use different icons or to change the default icon being used.

If you just want to change the icons being used, you could just replace the svgs under `src/assets` but retain the naming.

### Social

In `src/components/_config/social-icon-list.js` you are able to add further social links or edit the link property to point to your social profiles. Those social links are currently displayed in the _header_ and _footer_. Feel free to reuse them where ever
you like.

## Change the Theme

In order to change the colors of the theme you can just change the values of the css variables in the `src/styles/variables.styl` file. Every color in the _CSS_ is based on those css variables. This allows you to quickly apply a different theme of your choice.

```styl
body
  // Colors
  --bg-color #252839
  --bg-content-color #1b1d2a
  --title-color #fff
  --body-color #ced8de
  --primary-color #F1B631
  --secondary-color #f18731
  // Dimensions & Form
  --radius 6px
  --space 3.5rem
  --header-height 80px
  --content-width 860px
  // Transition Times
  --transition-fast 0.2s
  --transition-normal 0.4s
  --transition-slow 0.6s
  // Misc
  --bg-code rgba(0, 0, 0, 0.3)
  --border-color rgba(255, 255, 255, 0.1)
```

# Content Creation

To be added...
