import PropTypes from 'prop-types';
import React from 'react';
import Codepen from '../assets/codepen.svg';
import Github from '../assets/github.svg';
import style from './footer.module.styl';
import SocialIcons from './social-icons';

const Footer = ({ author }) => {
  const socialIcons = [
    {
      icon: <Github />,
      link: 'https://github.com/Knochenmark',
    },
    {
      icon: <Codepen />,
      link: 'https://codepen.io/Knochenmark',
    },
  ];

  return (
    <footer className={style.siteFooter}>
      <SocialIcons icons={socialIcons} />
      <span class={style.copyright}>
        © {new Date().getFullYear()} {author}
      </span>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
