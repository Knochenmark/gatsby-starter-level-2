import PropTypes from 'prop-types';
import React from 'react';
import CodeIcon from '../assets/code.svg';
import style from './footer.module.styl';
import SocialIcons from './social-icons';
import { socialIconList } from './social-icons-list';

const Footer = ({ author }) => {
  return (
    <footer className={style.siteFooter}>
      <div className={style.siteFooterSocial}>
        <SocialIcons icons={socialIconList} />
        <span className={style.copyright}>
          © {new Date().getFullYear()} {author}
        </span>
      </div>
      <div className={style.siteFooterRotator}>
        <CodeIcon />
        <span>
          with{' '}
          <span role="img" aria-label="heart emoji">
            💖
          </span>
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
};

export default Footer;
