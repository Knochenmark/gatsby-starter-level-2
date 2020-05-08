import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  position: relative;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  margin-left: 3px;
  font-weight: normal;
`;

const StyledAuthor = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;
`;
const StyledTagline = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;
`;
const StyledDescription = styled.p`
  margin-top: 25px;
  margin-left: 3px;
  width: 50%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledTagline>{tagline}</StyledTagline>
      <StyledDescription>{description}</StyledDescription>
      <ButtonLink label={ctaLabel} link={ctaLink} />
      <ScrollIndicator />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
