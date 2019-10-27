import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
          return node.frontmatter.published ? (
            <PostCard
              key={node.frontmatter.title}
              coverImage={coverImage}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={`blog${node.fields.slug}`}
              tags={node.frontmatter.tags}
            />
          ) : null;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
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
