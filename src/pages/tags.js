import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PropTypes from 'prop-types';

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

  let tags = group.map(tag => tag.fieldValue);

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
    console.log(char, data);
    return (
      <div key={char}>
        <h2>{char.toUpperCase()}</h2>
        {data.tags.map((tag, i) => {
          return (
            <>
              <Link to={`/tags/${tag}/`}>
                {tag} ({data.count[i]})
              </Link>
            </>
          );
        })}
      </div>
    );
  });

  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>Tags</h1>
        {Object.values(existingTagsWithAlphabet).length && elems}
      </div>
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
