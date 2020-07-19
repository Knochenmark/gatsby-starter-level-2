import styled from '@emotion/styled';
import React from 'react';
import { scroll } from './_shared/animation';
import { mq } from './_shared/media';
import { flexCenter } from './_shared/styled-mixins';

const StyledContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 100%;
  ${flexCenter};
  flex-direction: column;

  display: none;

  ${mq.gt.xs} {
    display: flex;
  }
`;
const StyledMouse = styled.div`
  width: 20px;
  height: 30px;
  padding: 0 6px;
  border: 2px solid #fff;
  border-radius: 20px;
`;
const StyledScroller = styled.div`
  position: relative;
  left: 50%;
  top: 6px;
  margin-left: -1px;
  width: 2px;
  height: 6px;
  background: var(--primary-color);
  border-radius: 25%;
  animation-name: ${scroll};
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
`;
const StyledScrollText = styled.span`
  font-size: 0.7rem;
  margin: 20px 0;
`;

const ScrollIndicator = () => {
  return (
    <StyledContainer>
      <StyledScrollText>Scroll down</StyledScrollText>
      <StyledMouse>
        <StyledScroller />
      </StyledMouse>
    </StyledContainer>
  );
};

ScrollIndicator.propTypes = {};

export default ScrollIndicator;
