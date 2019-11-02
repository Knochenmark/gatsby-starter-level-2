import { Link } from 'gatsby';
import React from 'react';
import style from './post-tag.module.styl';
import PropTypes from 'prop-types';

const PostTag = ({ tag }) => {
  return (
    <Link className={style.postTag} to="/">
      {tag}
    </Link>
  );
};

PostTag.propTypes = {
  tag: PropTypes.string,
};

export default PostTag;
