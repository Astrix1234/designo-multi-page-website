import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const LocationsContainer = styled.section`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 24px 120px 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div {
      position: relative;
    }
  }

  & h4 {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 32px;
    margin-top: 48px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 500;
    color: var(--dark-grey);
  }

  ${media.tablet`
    max-width: 768px;
    padding: 120px 40px 120px 39px;
    gap: 58px;
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 160px 164px 160px 165px;
    flex-direction: row; 
    justify-content: space-around;
  `}
`;

export const BgPatternLeafContainer = styled.div`
  position: absolute;
  z-index: -10;
  bottom: -160px;
  right: 0;
`;
