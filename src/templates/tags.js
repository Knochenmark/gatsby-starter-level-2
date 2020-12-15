import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1, StyledH2 } from '../components/_shared/styled-headings';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledFullHeightSection } from '../components/_shared/styled-section';

const StyledTagsLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin: 2.5rem 0;
`;
const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `A collection of ${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <StyledFullHeightSection>
        <StyledTagsH1>{tag}</StyledTagsH1>
        <StyledTagsLinkContainer>
          <TextLink label="View All Tags" link="/tags" />
        </StyledTagsLinkContainer>
        <StyledH2>{tagHeader}</StyledH2>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/blog${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </StyledFullHeightSection>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { published: { eq: true }, tags: { in: [$tag] } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
