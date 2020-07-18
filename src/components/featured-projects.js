import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './icon';
import TextLink from './links/text-link';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProject = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`;
const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;
const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--body-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  & svg {
    margin: 0 0.5rem;
  }
`;
const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const FeaturedProjects = ({ featured }) => {
  const featuredProjects = featured.map((project, index) => {
    const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;

    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const demoLinkLabel = `featured project ${title} demo`;
    const repoLinkLabel = `featured project ${title} repo`;

    return (
      <StyledFeaturedProject key={title + index}>
        <a
          aria-label={demoLink ? demoLinkLabel : repoLink ? repoLinkLabel : `featured project ${title}`}
          href={demoLink ? demoLink : repoLink ? repoLink : '#'}
          target="_blank"
          rel="noopener"
        >
          {coverImage && (
            <StyledImageContainer hasHover>
              <Img fluid={coverImage} />
            </StyledImageContainer>
          )}
        </a>
        <StyledProjectInfoContainer>
          <StyledContentLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledContentLink>
          <StyledDescription dangerouslySetInnerHTML={{ __html: project.html }} />
          <TechList techs={project.frontmatter.techs} />
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                <Icon icon="github" prefix="fab" />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener" title="Demo Link" aria-label={demoLinkLabel}>
                <Icon icon="external-link-alt" />
              </a>
            )}
          </StyledLinkContainer>
        </StyledProjectInfoContainer>
      </StyledFeaturedProject>
    );
  });

  return (
    <StyledSection id="projects">
      <StyledH1>Featured Projects</StyledH1>
      {featuredProjects}
      <StyledArchiveContainer>
        <TextLink label="View More Projects" link="/projects" />
      </StyledArchiveContainer>
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  featured: PropTypes.array.isRequired,
};

export default FeaturedProjects;
