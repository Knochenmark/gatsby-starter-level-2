import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
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
  width: 50%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description } = data;
  return (
    <StyledSection>
      <StyledIntroduction>{introduction}</StyledIntroduction>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledTagline>{tagline}</StyledTagline>
      <StyledDescription>{description}</StyledDescription>
    </StyledSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
