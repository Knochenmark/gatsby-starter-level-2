import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Tag from '../components/tag';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      {post.frontmatter.published ? (
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.tags.map(tag => (
            <Tag tag={tag} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        published
      }
    }
  }
`;
