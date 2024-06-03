import styled from 'styled-components';

export const StyledSVG = styled.svg`
  fill: var(--peach);
  transition: fill 0.3s ease-in-out;

  &:hover {
    fill: var(--light-peach);
  }
`;
