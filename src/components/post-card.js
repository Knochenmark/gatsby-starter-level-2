import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import style from './post-card.module.styl';
import PostTag from './post-tag';

const StyledPostTags = styled.div`
  pointer-events: none;
  margin: 1rem 0 0;
  padding: 0 var(--space);
  position: relative;
  z-index: 2;
`;

const PostCard = ({ title, date, description, link, coverImage, tags }) => {
  const tagsList = tags.map(tag => <PostTag key={tag} tag={tag} />);

  return (
    <article className={`${style.postCard} content-box`}>
      <Link to={link}>
        <div className={style.postCardCoverImage}>{coverImage && <Img fluid={coverImage} />}</div>
      </Link>
      <StyledPostTags>{tagsList}</StyledPostTags>
      <Link to={link}>
        <div className={style.postCardContent}>
          <h2 className="post-card__title">{title}</h2>
          <div className={style.postCardContentPublished}>published on {date}</div>
          <p className="post-card__description">{description}</p>
        </div>
      </Link>
      <Link className={style.readMore} to={link}>
        <span>Read more</span>
      </Link>
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
