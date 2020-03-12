import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/index.styl';
import Footer from './footer';
import Header from './header';
import NavigationBar from './nagivation-bar';
import ScrollToTop from './scroll-to-top';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const { menuLinks, title, author } = data.site.siteMetadata;
  return (
    <React.Fragment>
      <Header menuLinks={menuLinks} siteTitle={title} />
      <main>{children}</main>
      <Footer author={author} />
      <NavigationBar menuLinks={menuLinks} />
      <ScrollToTop />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
