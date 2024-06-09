import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  & button {
    border: none;
    background-color: transparent;
  }

  ${media.tablet`
    max-width: 768px;
    height: 155px;
    padding: 0 40px 0 39px;
  `}

  ${media.desktop`
    max-width: 1440px;
    height: 155px;
    padding: 0 164px 0 165px;
  `}
`;
export const HederContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--white);
  z-index: 100;
`;
