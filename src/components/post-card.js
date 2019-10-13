import { Link } from 'gatsby';
import React from 'react';
import style from './post-card.module.styl';

const PostCard = ({ title, description, link }) => {
  return (
    <div className={`${style.postCard} content-box`}>
      {/* // TODO Add header with image */}
      <div>
        <h2 className="post-card__title">{title}</h2>
        <p class="post-card__description">{description}</p>

        <Link to={link}>{title}</Link>
      </div>
    </div>
  );
};

export default PostCard;
