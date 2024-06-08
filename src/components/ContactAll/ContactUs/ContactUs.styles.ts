import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  max-width: 327px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;

  & h2 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
  }

  & p {
    font-size: 15px;
    line-height: 25px;
  }

  ${media.tablet`
    max-width: 100%;
    align-items: flex-start;
    text-align: left;

   & h2 {
    font-size: 48px;
    line-height: 48px;
  }

  & p {
    font-size: 16px;
    line-height: 26px;
  }
  `}
`;
