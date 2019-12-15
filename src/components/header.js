import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './header.module.styl';
import SocialIcons from './social-icons';
import { socialIconList } from './social-icons-list';

const StyledHeader = styled.header`
  height: var(--header-height);
  flex-shrink: 0;
  background-color: var(--bg-content-color);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 calc((var(--space) / 2));
`;
const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: var(--title-color) !important;
`;
const StyledNav = styled.nav`
  margin-left: 0.75rem;
  display: flex;
  flex: 1;
  align-items: center;
`;
const StyledNavLink = styled(Link)`
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--title-color) !important;
`;

const Header = ({ menuLinks, siteTitle }) => (
  <StyledHeader className={style.siteHeader}>
    <StyledContainer>
      <StyledHomeLink to="/">{siteTitle}</StyledHomeLink>
      <StyledNav>
        {menuLinks.map(link => (
          <StyledNavLink key={link.name} to={link.link} activeClassName="active">
            {link.name}
          </StyledNavLink>
        ))}
      </StyledNav>
      <SocialIcons icons={socialIconList} />
    </StyledContainer>
  </StyledHeader>
);

const menuLinksPropTypeShape = PropTypes.shape({
  name: PropTypes.string,
  link: PropTypes.string,
});

Header.propTypes = {
  menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
