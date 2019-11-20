import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './post-tag.module.styl';

const PostTag = ({ tag }) => (
  <Link className={style.postTag} to="/">
    {tag}
  </Link>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
