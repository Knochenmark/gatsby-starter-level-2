import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import FeaturedProjects from '../components/featured-projects';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const heroData = {
    author: data.hero.siteMetadata.author,
    tagline: data.hero.siteMetadata.tagline,
    description: data.hero.siteMetadata.heroDescription,
    introduction: data.hero.siteMetadata.heroIntroduction,
    ctaLink: data.hero.siteMetadata.ctaLink,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={heroData} />
      <About data={data.about} />
      <FeaturedProjects data={data.featuredProjects.nodes} />
      {/* <RecentPosts data={data.blog.edges} /> */}
      <Contact data={data.contact} />
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
        ctaLink {
          label
          link
        }
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
