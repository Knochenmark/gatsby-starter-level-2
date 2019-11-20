import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <section>
        <h3>Latest Blog Posts</h3>
        <Link to="/blog">View All Posts</Link>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
          return node.frontmatter.published ? (
            <PostCard
              key={node.frontmatter.title}
              coverImage={coverImage}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              link={`blog${node.fields.slug}`}
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
  query {
    allMarkdownRemark(
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
