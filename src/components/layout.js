/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/index.styl';
import Footer from './footer';
import Header from './header';

import { StyledSection } from './_shared/styled-section';

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

  return (
    <React.Fragment>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <StyledSection>
        <main>{children}</main>
      </StyledSection>
      <Footer author={data.site.siteMetadata.author} />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
