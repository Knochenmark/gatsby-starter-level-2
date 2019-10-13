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
          console.log(node.frontmatter);
          return node.frontmatter.published ? (
            <Link to={`blog${node.fields.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
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
