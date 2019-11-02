import React from 'react';
import PropTypes from 'prop-types';
import style from './social-icons.module.styl';
import PropTypes from 'prop-types';

const SocialIcons = ({ icons }) => {
  const socialIcons = icons.map(({ icon, link }) => {
    return (
      <a href={link} key={link}>
        {icon}
      </a>
    );
  });

  return (
    <div className={style.socialContainer}>
      <div className={style.socialIcons}>{socialIcons}</div>
    </div>
  );
};

SocialIcons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default SocialIcons;
