import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import PostTag from '../components/post-tag';

export default ({ data }) => {
  const post = data.markdownRemark;
  const coverImage = post.frontmatter.cover_image ? post.frontmatter.cover_image.childImageSharp.fluid : null;

  return (
    <Layout>
      {post.frontmatter.published ? (
        <div>
          {coverImage && <Img fluid={coverImage} />}
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.tags.map(tag => (
            <PostTag tag={tag} key={tag} />
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
`;
