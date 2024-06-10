import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 120px 39px;
  `}

  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 160px 165px;
  `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: var(--peach);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 715px;
  gap: 80px;

  ${media.tablet`
    border-radius: 20px;
    height: 632px;
    gap: 64px;
  `}

  ${media.desktop`
    flex-direction: row-reverse;
    gap: 82px;
    padding-left: 95px;
    height: 480px;
  `}
`;

export const TextContainer = styled.div`
  max-width: 327px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;
  color: var(--white);

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
    max-width: 573px;
    gap: 32px;

      & h2  {
    font-size: 48px;
    line-height: 48px;
    }

     & p {
    font-size: 16px;
    line-height: 26px;
  }
  `}

  ${media.desktop`
    max-width: 458px;
    text-align: left;
    align-items: flex-start;
  `}
`;

export const CircleContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 242px;

  ${media.tablet`
    right: 170px;
    bottom: 101px;
  `}

  ${media.desktop`
    right: 471px;
    bottom: 0;
  `}
`;
