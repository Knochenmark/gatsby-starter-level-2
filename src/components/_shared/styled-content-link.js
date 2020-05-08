import styled from '@emotion/styled';

export const StyledContentLink = styled.a`
  text-decoration: none;

  &:hover > * {
    cursor: pointer;
    color: var(--primary-color);
  }
`;
