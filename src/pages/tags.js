import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { flexWrap } from '../components/_shared/styled-mixins';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';

const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const StyledTagLinkContainer = styled.div`
  ${flexWrap};
`;
const StyledTagLink = styled(Link)`
  margin: 0.8rem;
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  const [alphabet] = React.useState('abcdefghijklmnopqrstuvwxyz'.split(''));
  const [existingTagsWithAlphabet, setExistingTagsWithAlphabet] = React.useState({});

  const tagCount = Object.values(existingTagsWithAlphabet).length;

  React.useEffect(() => {
    let findExistingTags = {};
    alphabet.forEach((char) => {
      let regex = new RegExp(`^${char}`, 'i');
      let filtered = group.filter((tag) => {
        return regex.test(tag.fieldValue);
      });

      if (filtered.length > 0) {
        findExistingTags[char] = {};
        findExistingTags[char]['tags'] = filtered.map((tags) => tags.fieldValue);
        findExistingTags[char]['count'] = filtered.map((tags) => tags.totalCount);
      }
    });
    setExistingTagsWithAlphabet(findExistingTags);
  }, []);

  let elems = Object.entries(existingTagsWithAlphabet).map(([char, data]) => {
    return (
      <div key={char}>
        <h3>{char.toUpperCase()}</h3>
        <StyledTagLinkContainer>
          {data.tags.map((tag, i) => {
            return (
              <StyledTagLink key={tag + i} to={`/tags/${tag}/`}>
                {tag}
                {'\u00a0'}({data.count[i]})
              </StyledTagLink>
            );
          })}
        </StyledTagLinkContainer>
      </div>
    );
  });

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Tags" />
      <StyledFullHeightSection>
        <StyledTagsH1>Tags ({tagCount})</StyledTagsH1>
        <StyledSeparator />
        {tagCount && elems}
        <StyledSeparator />
        <TextLink label="Take me home" link="/" />
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
