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

const StyledTechContainer = styled.section`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > span {
    font-size: 0.8rem;
    color: var(--body-color);
    margin-bottom: 7px;
    white-space: nowrap;
  }
  > i {
    cursor: default;
    margin: 0 10px;
  }
`;

const StyledTag = styled.span`
  position: relative;
  font-size: 12px;
  margin-right: 30px;

  &:before {
    content: '';

    position: absolute;
    top: 7px;
    left: -14px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;

    border-left: 6px solid var(--link-color);
  }
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
          <StyledTechContainer>
            {techs.map((tech, i) => (
              <StyledTag key={tech}>{tech}</StyledTag>
            ))}
          </StyledTechContainer>
        </StyledTextSection>
      </StyledAboutContainer>
    </StyledSection>
  );
};

Blog.propTypes = {};

export default Blog;
