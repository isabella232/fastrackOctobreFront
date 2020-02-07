/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core';

const breakpoints = {
  small: 415,
  medium: 800,
};

const phoneRule = `(max-width: ${breakpoints.small - 1}px)`;
const tabletDownRule = `(max-width: ${breakpoints.medium - 1}px)`;


const mediaQueries = {
  phone: `@media screen and ${phoneRule}`,
  tablet: `@media screen and ${tabletDownRule}`,
};

const mediaQuery = (size) => (...args) => css`
  ${mediaQueries[size]} {
    ${css(...args)};
  }
`;
export const phoneQuery = mediaQuery('phone');
export const tabletQuery = mediaQuery('tablet');
