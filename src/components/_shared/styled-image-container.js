import styled from '@emotion/styled';

export const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  &:before {
    background-color: var(--link-color);
    content: '';
    position: absolute;
    bottom: -10px;
    left: -10px;
    width: 50%;
    height: 50%;
  }
`;
