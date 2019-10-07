import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>{JSON.stringify(data.allMarkdownRemark.edges)}</div>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
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
