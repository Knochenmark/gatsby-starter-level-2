import React from 'react';
import style from './social-icons.module.styl';

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(({ icon, link }) => {
    return <a href={link}>{icon}</a>;
  });

  return (
    <div className={style.socialContainer}>
      <div className={style.socialIcons}>{socialIcons}</div>
    </div>
  );
};

export default SocialIcons;
