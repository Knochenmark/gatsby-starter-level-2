import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import style from './post-card.module.styl';
import PostTag from './post-tag';

const PostCard = ({ title, description, link, coverImage, tags }) => {
  const tagsList = tags.map(tag => <PostTag tag={tag} />);

  return (
    <div className={`${style.postCard} content-box`}>
      {coverImage && <Img fluid={coverImage} />}
      <div>
        <h2 className="post-card__title">{title}</h2>
        <p className="post-card__description">{description}</p>

        <Link to={link}>{title}</Link>
        <div className={style.postTags}>{tagsList}</div>
      </div>
    </div>
  );
};

export default PostCard;
