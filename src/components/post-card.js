import { Link } from 'gatsby';
import React from 'react';
import style from './post-card.module.styl';
import Img from 'gatsby-image';

const PostCard = ({ title, description, link, fluidFeaturedImage }) => {
  return (
    <div className={`${style.postCard} content-box`}>
      {fluidFeaturedImage && <Img fluid={fluidFeaturedImage} />}
      <div>
        <h2 className="post-card__title">{title}</h2>
        <p class="post-card__description">{description}</p>

        <Link to={link}>{title}</Link>
      </div>
    </div>
  );
};

export default PostCard;
