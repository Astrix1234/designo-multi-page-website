import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 24px 311px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--dark-grey);
  }

  h4 {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin-top: 48px;
    margin-bottom: 32px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }

  ${media.tablet`
    max-width: 768px;
    padding: 120px 40px 331px 39px;
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 160px 164px 380px 165px;   
  `}
`;

export const BgPatternLeafContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  transform: rotate(180deg);
  bottom: 0;
  right: 164px;
`;
