import { css, CSSProp } from 'styled-components';

const breakpoints = {
  desktop: '1440px',
  tablet: '768px',
};

export const media = {
  desktop: (styles: CSSProp) => css`
    @media (max-width: ${breakpoints.desktop}) {
      ${styles}
    }
  `,
  tablet: (styles: CSSProp) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
};
