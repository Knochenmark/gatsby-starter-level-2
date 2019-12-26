import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Tag from './tag';

const Tags = () => {
  const data = useStaticQuery(graphql`
    query fetchTasks {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  const [alphabet] = React.useState('abcdefghijklmnopqrstuvwxyz'.split(''));
  const tagAmount = {};
  const tags = data.allMarkdownRemark
    ? data.allMarkdownRemark.edges.reduce((acc, curr) => {
        curr.node.frontmatter.tags.map(tag => {
          if (!acc.includes(tag)) {
            acc.push(tag);
            tagAmount[tag] = 1;
          } else {
            tagAmount[tag] += 1;
          }
        });

        return acc;
      }, [])
    : [];
  let [existingTags, setExistingTags] = React.useState({});

  React.useEffect(() => {
    let findExistingTags = {};
    alphabet.forEach(char => {
      let regex = new RegExp(`^${char}`, 'i');
      let filtered = tags.filter(tag => {
        return regex.test(tag);
      });

      if (filtered.length > 0) {
        findExistingTags[char] = filtered;
      }
    });

    setExistingTags(findExistingTags);
  }, []);

  let elems = [];
  for (let key of Object.keys(existingTags)) {
    let elem = (
      <React.Fragment>
        <h2>{key}</h2>
        {existingTags[key].map(tag => (
          <span key={tag}>
            {tag}
            <Tag number={tagAmount[tag]} />
          </span>
        ))}
      </React.Fragment>
    );
    elems.push(elem);
  }

  return <React.Fragment>{elems.length && elems}</React.Fragment>;
};

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
