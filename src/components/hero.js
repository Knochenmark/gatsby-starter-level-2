import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ data }) => {
  const { introduction, author, tagline, description } = data;
  return (
    <section>
      <p>{introduction}</p>
      <h1>{author}</h1>
      <h2>{tagline}</h2>
      <p>{description}</p>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
