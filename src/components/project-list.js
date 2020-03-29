import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import External from '../assets/external.svg';
import Github from '../assets/github.svg';
import TextLink from './links/text-link';
import TechList from './tech-list';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';

const StyledContainer = styled.section`
  width: 100%;
  margin-top: 2.5rem;
`;
const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const StyledTitleLink = styled.a`
  text-decoration: none;

  &:hover h2 {
    color: var(--link-color);
  }
`;
const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: unset;
  }

  & svg {
    fill: currentColor;
    margin: 0 0.5rem;
  }
`;
const StyledInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledTextSection = styled.section`
  white-space: pre-line;

  ${contentBox}
  max-width: unset;
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
const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const ProjectList = ({ projects }) => {
  const projectItems = projects.map(project => {
    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const demoLinkLabel = `featured project ${title} demo`;
    const repoLinkLabel = `featured project ${title} repo`;

    return (
      <StyledProject key={title}>
        <StyledHeader>
          <StyledTitleLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledTitleLink>
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                <Github />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener" title="Demo Link" aria-label={demoLinkLabel}>
                <External />
              </a>
            )}
          </StyledLinkContainer>
        </StyledHeader>
        <StyledInfoContainer>
          <StyledTextSection dangerouslySetInnerHTML={{ __html: project.html }} />
          <TechList techs={project.frontmatter.techs} />
        </StyledInfoContainer>
      </StyledProject>
    );
  });

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledH1>Other Noteworthy Projects</StyledH1>
      </StyledHeader>
      {projectItems}
      <StyledArchiveContainer>
        <TextLink label="View All Projects" link="/projects" />
      </StyledArchiveContainer>
    </StyledContainer>
  );
};

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProjectList;
