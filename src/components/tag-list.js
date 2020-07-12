import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const StyledTagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;
const StyledTag = styled.span`
  pointer-events: auto;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: lowercase;

  color: var(--primary-color);
  margin: 0 1rem 0.5rem 0;
`;
const StyledTagLink = styled(Link)`
  text-decoration: none;
`;

const TagList = ({ tags }) => {
  return (
    <StyledTagContainer>
      {tags.map((tag) => (
        <StyledTag key={tag}>
          <StyledTagLink to={`/tags/${tag}/`}>#{tag}</StyledTagLink>
        </StyledTag>
      ))}
    </StyledTagContainer>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
