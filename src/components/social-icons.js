import React from 'react';
import PropTypes from 'prop-types';
import style from './social-icons.module.styl';

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

const iconShape = PropTypes.shape({
  link: PropTypes.string,
  icon: PropTypes.element
});

SocialIcons.propTypes = {
  icons: PropTypes.arrayOf(iconShape)
};

export default SocialIcons;
