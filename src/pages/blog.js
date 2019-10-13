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
          return (
            <PostCard
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={`blog${node.fields.slug}`}
            />
          );
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
            description
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
