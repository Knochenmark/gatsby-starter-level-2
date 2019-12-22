import tag from './tag.js';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import style from './tag.module.styl';

const Tag = () => {
  const data = useStaticQuery(graphql`
    query {
    }
  `);

  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <p>aselaemkal</p>
    </React.Fragment>
  );
};

Tag.propTypes = {};

Tag.defaultProps = {};

export default Tag;
