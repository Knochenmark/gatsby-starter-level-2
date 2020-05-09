import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledH1, StyledH2 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';

const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 3rem;
  background-color: var(--body-color);
`;
const StyledTagLink = styled(Link)`
  margin: 0.8rem;
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const [alphabet] = React.useState('abcdefghijklmnopqrstuvwxyz'.split(''));
  const [existingTagsWithAlphabet, setExistingTagsWithAlphabet] = React.useState({});

  const tagCount = Object.values(existingTagsWithAlphabet).length;

  React.useEffect(() => {
    let findExistingTags = {};
    alphabet.forEach(char => {
      let regex = new RegExp(`^${char}`, 'i');
      let filtered = group.filter(tag => {
        return regex.test(tag.fieldValue);
      });

      if (filtered.length > 0) {
        findExistingTags[char] = {};
        findExistingTags[char]['tags'] = filtered.map(tags => tags.fieldValue);
        findExistingTags[char]['count'] = filtered.map(tags => tags.totalCount);
      }
    });
    setExistingTagsWithAlphabet(findExistingTags);
  }, []);

  let elems = Object.entries(existingTagsWithAlphabet).map(([char, data]) => {
    return (
      <div key={char}>
        <h3>{char.toUpperCase()}</h3>
        {data.tags.map((tag, i) => {
          return (
            <StyledTagLink to={`/tags/${tag}/`}>
              {tag} ({data.count[i]})
            </StyledTagLink>
          );
        })}
      </div>
    );
  });

  return (
    <Layout>
      <SEO title={title} />
      <StyledFullHeightSection>
        <StyledTagsH1>Tags ({tagCount})</StyledTagsH1>
        <StyledSeparator />
        <StyledH2>All Tags</StyledH2>
        {tagCount && elems}
      </StyledFullHeightSection>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
