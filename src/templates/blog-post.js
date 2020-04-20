import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TagList from '../components/tag-list';
import { StyledH2 } from '../components/_shared/styled-headings';
import { StyledSection } from '../components/_shared/styled-section';

const StyledBlogSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));

  & > .gatsby-image-wrapper {
    width: 100%;
  }
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const coverImage = post.frontmatter.cover_image ? post.frontmatter.cover_image.childImageSharp.fluid : null;
  const { published, tags, title } = post.frontmatter;

  return (
    <Layout>
      {published ? (
        <StyledBlogSection>
          {coverImage && <Img fluid={coverImage} />}
          <TagList tags={tags} />
          <StyledH2>{title}</StyledH2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledBlogSection>
      ) : null}
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

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
