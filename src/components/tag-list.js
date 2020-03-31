import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const StyledTagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;
const StyledTag = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;
  text-transform: lowercase;

  color: var(--link-color);
  margin: 0 1rem 0.5rem 0;
`;

const TagList = ({ tags }) => {
  return (
    <StyledTagContainer>
      {tags.map(tag => (
        <StyledTag key={tag}>#{tag}</StyledTag>
      ))}
    </StyledTagContainer>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
