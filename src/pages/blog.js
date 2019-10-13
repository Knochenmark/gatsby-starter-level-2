import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges);
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          let fluidFeaturedImage = node.frontmatter.featuredImage
            ? node.frontmatter.featuredImage.childImageSharp.fluid
            : null;
          return node.frontmatter.published ? (
            <PostCard
              fluidFeaturedImage={fluidFeaturedImage}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={`blog${node.fields.slug}`}
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
            date(formatString: "DD MMMM, YYYY")
            published
            description
            featuredImage {
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
