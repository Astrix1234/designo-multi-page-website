import styled, { keyframes } from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BgPatternLeafContainer = styled.div`
  position: absolute;
  top: 126px;
  z-index: -1;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 0 39px;
  `}

  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 0 165px;
  `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: var(--peach);
  height: 320px;
  position: relative;
  overflow: hidden;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  gap: 24px;

  & h2,
  & p {
    z-index: 4;
  }

  & h2 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
  }
  & p {
    font-size: 15px;
    line-height: 25px;
    max-width: 327px;
    width: 100%;
  }

  ${media.tablet`
    border-radius: 20px;
    
    & h2 {
    font-size: 48px;
    line-height: 48px;
  }
   & p {
    font-size: 16px;
    line-height: 26px;
    max-width: 400px;
  }
  `}
`;

export const CircleContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  ${media.tablet`
      right: -146px;
  top: -120px;

  `}

  ${media.desktop`
      right: 292px;
  `}
`;
