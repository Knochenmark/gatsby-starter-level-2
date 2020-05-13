import { css } from '@emotion/core';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexEnd = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const flexWrap = css`
  display: flex;
  flex-wrap: wrap;
`;

export const contentBox = css`
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  margin: 0 auto;
  transition: background-color var(--transition-slow);
  padding: var(--space);
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02), 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform var(--transition-normal), background-color var(--transition-normal),
    box-shadow var(--transition-slow);
`;
