import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const StyledPostTag = styled(Link)`
  margin-right: 0.7em;
  font-size: 0.8em;
  text-decoration: none;
  background-color: var(--bg-color);
  color: currentColor !important;
  padding: 0.5em;
  border-radius: var(--radius);
`;

const PostTag = ({ tag }) => <StyledPostTag to="/tags/${tag}">{tag}</StyledPostTag>;

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
