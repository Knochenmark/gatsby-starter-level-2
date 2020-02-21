import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import External from '../assets/external.svg';
import Github from '../assets/github.svg';
import { mq } from './_shared/media';
import { StyledHeading } from './_shared/styled-heading';
import { contentBox, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledImageContainer = styled.section`
  min-width: 300px;
  min-height: 200px;
  position: relative;
  margin: 0 30px 30px 0;
  flex: 1;

  &:before {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
  }
`;

const StyledTextSection = styled.section`
  min-width: 500px;
  margin-right: 10px;
  flex: 1;
`;

const StyledAboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Blog = ({ data }) => {
  const {
    frontmatter: { title, link, techs, about_image },
    rawMarkdownBody,
  } = data;

  console.log('hmm', about_image.childImageSharp.fluid);
  const image = about_image ? about_image.childImageSharp.fluid : null;

  return (
    <StyledSection id="about">
      <StyledHeading>About Me</StyledHeading>
      <StyledAboutContainer>
        <StyledImageContainer>
          <Img fluid={image} style={{ height: '100%' }} objectFit="cover" />
        </StyledImageContainer>
        <StyledTextSection>
          <p>{rawMarkdownBody}</p>
        </StyledTextSection>
      </StyledAboutContainer>
    </StyledSection>
  );
};

Blog.propTypes = {};

export default Blog;
