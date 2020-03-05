import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollIndicator from './scroll-indicator';
import { StyledSection } from './_shared/styled-section';
import StyledButton from './_shared/styled-button';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIntroduction = styled.div`
  color: var(--link-color);
  margin-left: 3px;
  font-weight: normal;
`;

const StyledAuthor = styled.h1`
  font-size: 75px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;
`;
const StyledTagline = styled.h2`
  font-size: 70px;
  line-height: 1.1;
  margin: 0;
  color: var(--link-color);
  word-break: break-word;
`;
const StyledDescription = styled.p`
  margin-top: 25px;
  margin-left: 3px;
  width: 70%;
  max-width: 800px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description } = data;
  return (
    <StyledHeroSection>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledTagline>{tagline}</StyledTagline>
      <StyledDescription>{description}</StyledDescription>

      <StyledButton label="CALL TO ACTION" rightArrow link="https://github.com/theeko" />
      <ScrollIndicator />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
