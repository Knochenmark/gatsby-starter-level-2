import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Tag from '../components/tag';
import Img from 'gatsby-image';

export default ({ data }) => {
  const post = data.markdownRemark;
  let featuredImgFluid = post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid : null;

  return (
    <Layout>
      {post.frontmatter.published ? (
        <div>
          {featuredImgFluid && <Img fluid={featuredImgFluid} />}
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.frontmatter.tags.map(tag => (
            <Tag tag={tag} key={tag} />
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

        featuredImage {
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
