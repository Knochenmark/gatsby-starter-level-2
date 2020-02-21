import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Contact from '../components/contact';
import FeaturedProjects from '../components/featured-projects';
import About from '../components/about';
import RecentPosts from '../components/recent-posts';

const Index = ({ data }) => {
  const heroData = {
    author: data.hero.siteMetadata.author,
    tagline: data.hero.siteMetadata.tagline,
    description: data.hero.siteMetadata.heroDescription,
    introduction: data.hero.siteMetadata.heroIntroduction,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={heroData} />
      <FeaturedProjects data={data.featuredProjects.nodes} />
      <RecentPosts data={data.blog.edges} />
      <Contact data={data.contact} />
      <About data={data.about} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    hero: site {
      siteMetadata {
        author
        tagline
        heroDescription
        heroIntroduction
      }
    }

    contact: site {
      siteMetadata {
        contact {
          phone
          email
          address
          text
        }
      }
    }

    featuredProjects: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          repo_link
          demo_link
          techs
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/about/" }) {
      frontmatter {
        title
        link
        techs
        about_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      rawMarkdownBody
    }

    blog: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "D MMMM, YYYY")
            published
            description
            about_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
