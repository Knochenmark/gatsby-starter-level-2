import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import FeaturedProjects from '../components/featured-projects';
import Hero from '../components/hero';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

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
      <FeaturedProjects data={data.featuredProjects.nodes}></FeaturedProjects>
      <section>
        <h3>Latest Blog Posts</h3>
        <Link to="/blog">View All Posts</Link>
        {data.blog.edges.map(({ node }) => {
          const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
          return node.frontmatter.published ? (
            <PostCard
              key={node.frontmatter.title}
              coverImage={coverImage}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              link={`/blog${node.fields.slug}`}
              tags={node.frontmatter.tags}
            />
          ) : null;
        })}
      </section>
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
      }
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
            cover_image {
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
