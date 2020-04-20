import styled from '@emotion/styled';

export const StyledContentLink = styled.a`
  text-decoration: none;

  &:hover {
    /* TODO Remove opacity override */
    opacity: 1 !important;
  }

  &:hover > * {
    cursor: pointer;
    color: var(--link-color);
  }
`;
