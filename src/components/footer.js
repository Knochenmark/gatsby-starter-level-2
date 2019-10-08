import PropTypes from 'prop-types';
import React from 'react';
import CodeIcon from '../assets/code.svg';
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
      <div className={style.siteFooterSocial}>
        <SocialIcons icons={socialIcons} />
        <span class={style.copyright}>
          © {new Date().getFullYear()} {author}
        </span>
      </div>
      <div className={style.siteFooterRotator}>
        <CodeIcon />
        <span>with</span>
        {/* <Rotator /> */}
        <span className={style.byText}>
          by <b>{author}</b>
        </span>
      </div>
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
