import { Link } from 'gatsby';
import React from 'react';
import style from './post-tag.module.styl';

export default ({ tag }) => {
  return (
    <Link className={style.postTag} to="/">
      {tag}
    </Link>
  );
};
