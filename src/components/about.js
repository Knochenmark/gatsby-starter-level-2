import styled from '@emotion/styled';
import Img from 'gatsby-image';
import React from 'react';
import Arrow from '../assets/arrow.svg';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { StyledSection } from './_shared/styled-section';

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 50px;
  padding: 50px 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTextSection = styled.section`
  white-space: pre-line;
`;
const StyledTechContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledTag = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;

  color: var(--body-color);
  margin: 0 1rem 0.5rem 0;

  & > svg {
    fill: var(--link-color);
    height: 0.8rem;
    margin-right: 0.25rem;
  }
`;

const About = ({ data }) => {
  const {
    frontmatter: { title, techs, about_image },
    rawMarkdownBody,
  } = data;

  const image = about_image ? about_image.childImageSharp.fluid : null;

  return (
    <StyledSection id="about">
      <StyledH1>About Me</StyledH1>
      <StyledAboutContainer>
        {image && (
          <StyledImageContainer>
            <Img fluid={image} objectFit="contain" />
          </StyledImageContainer>
        )}
        <div>
          <StyledH2>{title}</StyledH2>
          <StyledTextSection dangerouslySetInnerHTML={{ __html: rawMarkdownBody }} />
          <StyledTechContainer>
            {techs.map(tech => (
              <StyledTag key={tech}>
                <Arrow />
                {tech}
              </StyledTag>
            ))}
          </StyledTechContainer>
        </div>
      </StyledAboutContainer>
    </StyledSection>
  );
};

About.propTypes = {};

export default About;
