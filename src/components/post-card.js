import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import style from './post-card.module.styl';
import PostTag from './post-tag';

const PostCard = ({ title, description, link, coverImage, tags }) => {
  const tagsList = tags.map(tag => <PostTag key={tag} tag={tag} />);

  return (
    <article className={`${style.postCard} content-box`}>
      <Link to={link}>
        <div className={style.postCardContent}>
          {coverImage && <Img fluid={coverImage} />}
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__description">{description}</p>
        </div>
      </Link>
      <div className={style.postTags}>{tagsList}</div>
    </article>
  );
};

const coverImageShape = PropTypes.shape({
  aspectRatio: PropTypes.number,
  base64: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
});

PostCard.propTypes = {
  coverImage: coverImageShape,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default PostCard;
