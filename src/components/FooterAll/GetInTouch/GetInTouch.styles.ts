import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  z-index: 12;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -190px;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 0 39px;
    top: -264px;
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 0 165px;   
    top: -220px;
  `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: var(--peach);
  height: 379px;
  position: relative;
  overflow: hidden;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 12;
  border-radius: 20px;

  & h2,
  & p,
  & div {
    z-index: 14;
  }

  & h2 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
    max-width: 279px;
    width: 100%;
    margin-top: 64px;
  }

  & p {
    font-size: 15px;
    line-height: 25px;
    max-width: 279px;
    width: 100%;
    margin: 24px 0;
  }

  ${media.tablet`
    height: 350px;

    & h2 {
      font-size: 40px;
      line-height: 40px;
      max-width: 335px;
      margin-top: 57px;
    }

    & p {
      font-size: 16px;
      line-height: 26px;
      max-width: 573px;
      margin: 20px 0 30px 0;
    }
  `}

  ${media.desktop`
    height: 292px;
    text-align: left;
    padding: 0 96px 0 95px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    & h2 {
      font-size: 40px;
      line-height: 40px;
      max-width: 268px;
      margin-top: 0;
    }

    & p {
      font-size: 16px;
      line-height: 26px;
      max-width: 459px;
      margin: 30px 0 0 0;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    align-items: flex-start;
  `}
`;

export const BgPatternContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(35%, -18%);
  z-index: 13;

  ${media.tablet`
    right: 0;
    top: 0;
    transform: translate(17%, -20%);
  `}

  ${media.desktop`
    right: 0;
    top: 0;
    transform: translateY(-25%);
  `}
`;
