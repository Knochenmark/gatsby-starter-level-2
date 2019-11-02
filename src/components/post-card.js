import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import style from './post-card.module.styl';
import PostTag from './post-tag';
import PropTypes from 'prop-types';

const PostCard = ({ title, description, link, coverImage, tags }) => {
  const tagsList = tags.map((tag, i) => <PostTag key={i} tag={tag} />);

  return (
    <Link to={link} className={style.postCardLink}>
      <div className={`${style.postCard} content-box`}>
        {coverImage && <Img fluid={coverImage} />}
        <div>
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__description">{description}</p>

          <Link to={link}>{title}</Link>
          <div className={style.postTags}>{tagsList}</div>
        </div>
      </div>
    </Link>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  coverImage: PropTypes.string,
  tags: PropTypes.string,
};

export default PostCard;
