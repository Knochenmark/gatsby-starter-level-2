import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,

      fontSize: '0.4em',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '20px',
          }}
        >
          {siteTitle}
        </Link>

        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '20px',
          }}
        >
          Projects
        </Link>

        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '20px',
          }}
        >
          About
        </Link>

        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '20px',
          }}
        >
          Blog
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
