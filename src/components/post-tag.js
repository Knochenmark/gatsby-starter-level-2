import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import style from './post-tag.module.styl';

const PostTag = ({ tag }) => (
  <Link className={style.postTag} to="/">
    {tag}
  </Link>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired
};

export default PostTag;