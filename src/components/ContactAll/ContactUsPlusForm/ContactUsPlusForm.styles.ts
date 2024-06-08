import styled, { keyframes } from 'styled-components';
import { media } from '../../../stylesheets/media';

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: var(--peach);
  position: relative;
  overflow: hidden;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
  padding: 72px 0;
  height: 764px;
  gap: 37px;

  ${media.tablet`
    border-radius: 20px;
    padding: 71px 58px;
    height: 711px;
    gap: 29px;
  `}

  ${media.desktop`
    flex-direction: row;
    gap: 95px;
    padding: 55px 96px;
    height: 480px;
  `}
`;

export const BgPatternContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 472px;
  transform: translate(-50%, 0);

  ${media.tablet`
    left: -122px;
    bottom: 154px;
    transform: translate(0, 0);  
  `}

  ${media.desktop`
    left: 0;
    bottom: 0;
    transform: translate(0, 0);   
  `}
`;
