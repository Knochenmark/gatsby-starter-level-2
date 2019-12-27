import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
`;
const StyledIntroduction = styled.div`
  color: var(--link-color);
  margin-left: 3px;
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
`;
const StyledTagline = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  color: var(--link-color);
`;
const StyledDescription = styled.p`
  margin-top: 25px;
  margin-left: 3px;
  width: 50%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description } = data;
  return (
    <StyledHeroSection>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledTagline>{tagline}</StyledTagline>
      <StyledDescription>{description}</StyledDescription>
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
