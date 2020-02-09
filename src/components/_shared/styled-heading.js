import styled from '@emotion/styled';
import React from 'react';

const StyledLeftHeadingTitle = styled.span`
  color: var(--link-color) !important;
`;

const StyledHeadingComp = ({ title, className }) => {
  let titleArr = title.split(' ');
  return (
    <div className={className}>
      <StyledLeftHeadingTitle>{titleArr[0]}</StyledLeftHeadingTitle>
      <span>{titleArr.slice(1).join(' ')}</span>
    </div>
  );
};

export const StyledHeading = styled(StyledHeadingComp)`
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: 24px;

  span {
    margin-right: 10px;
  }
`;
