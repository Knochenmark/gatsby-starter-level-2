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
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          flex: 1,
          padding: 'calc((var(--space) / 2))',
        }}
      >
        <main>{children}</main>
      </div>
      <Footer author={data.site.siteMetadata.author} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
