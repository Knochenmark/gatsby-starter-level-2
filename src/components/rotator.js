import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { flexCenter } from './_shared/styled-mixins';

const StyledRotator = styled.div`
  ${flexCenter};
  margin: 0.8rem 0.25rem;
  height: 1rem;
  width: 1rem;
  overflow: hidden;
`;

const slide = keyframes`
  0%, 10% {
     transform: translateY(40%);
  }

  20%, 30% {
    transform: translateY(20%);
  }

  40%, 50% {
    transform: translateY(0%);
  }

  60%, 70% {
    transform: translateY(-20%);
  }

  80%, 90%, 100% {
    transform: translateY(-40%);
  }
`;

const StyledEmoji = styled.span`
  animation: ${slide} 8s infinite alternate ease-in-out;
`;

const Rotator = ({ emojis }) => {
  // emojis must be an array of 5 emoji characters,
  // if you want more or less emojis you have to adjust the animation accordingly
  return (
    <StyledRotator>
      <StyledEmoji>{emojis.join(' ')}</StyledEmoji>
    </StyledRotator>
  );
};

Rotator.propTypes = [];

export default Rotator;
