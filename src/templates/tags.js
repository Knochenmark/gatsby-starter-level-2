import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from '../components/links/text-link';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledSection } from '../components/_shared/styled-section';

const StyledTagsLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `A collection of ${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <StyledSection>
      <h1>{tag}</h1>
      <h2>{tagHeader}</h2>
      <StyledTagsLinkContainer>
        <TextLink label="View All Tags" link="/tags" />
      </StyledTagsLinkContainer>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={`blog/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </StyledSection>
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
