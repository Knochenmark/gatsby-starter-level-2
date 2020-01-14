import { keyframes } from '@emotion/core'

export const scroll = keyframes`
  0% {
    opacity: 0;
  }

  10% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(10px);
    opacity: 0;
  }
`;