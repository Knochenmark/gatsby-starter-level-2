import PropTypes from 'prop-types';
import React from 'react';
import { StyledHeading } from './_shared/styled-heading';
import { StyledSection } from './_shared/styled-section';

const FeaturedProjects = ({ data }) => {
  console.log(data);

  const featuredProjects = data.map((project, i) => {
    return <div key={project.frontmatter.title}>{project.frontmatter.title}</div>;
  });

  return (
    <StyledSection>
      <StyledHeading>Featured Projects</StyledHeading>
      {featuredProjects}
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeaturedProjects;
