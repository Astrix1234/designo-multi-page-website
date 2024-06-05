import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const FeaturesContainer = styled.section`
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 24px 311px 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    & > div {
      position: relative;
    }
  }

  ${media.tablet`
    max-width: 768px;
    padding: 120px 40px 331px 39px;

     & > div {
    flex-direction: row;
  }
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 160px 164px 380px 165px;
    flex-direction: row; 
    gap: 30px;
    
    & > div {
    flex-direction: column;
  }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--dark-grey);

  & h4 {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 32px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 500;
  }

  & p {
    font-size: 16px;
    line-height: 26px;
  }

  ${media.tablet`
    align-items: flex-start;
    text-align: left;

    & h4 {
    margin-bottom: 16px;
    }
  `}

  ${media.desktop`
    align-items: center;
    text-align: center; 
  
   & h4 {
    margin-bottom: 32px;
    }
  `}
`;

export const BgPatternLeafContainer = styled.div`
  position: absolute;
  z-index: -10;
  transform: rotate(180deg);
  bottom: 74px;
  right: 0;
`;
