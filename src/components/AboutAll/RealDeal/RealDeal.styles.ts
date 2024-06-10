import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 310px;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 384px 39px;
  `}

  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 380px 165px;
  `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: var(--light);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 865px;
  gap: 80px;

  ${media.tablet`
    border-radius: 20px;
    height: 736px;
    gap: 68px;
  `}

  ${media.desktop`
    flex-direction: row-reverse;
    gap: 94px;
    padding-left: 95px;
    height: 640px;
  `}
`;

export const CircleContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 253px;

  ${media.tablet`
    left: 94px;
    bottom: 336px;
  `}
`;

export const Circle180Container = styled.div`
  position: absolute;
  left: 0;
  bottom: -39px;
  transform: rotate(180deg);

  ${media.tablet`
     left: 94px;
  bottom: 44px;
  `}

  ${media.desktop`
     left: 0;
  bottom: 0;
  `}
`;

export const Circle90Container = styled.div`
  position: absolute;
  left: 292px;
  bottom: -39px;
  transform: rotate(270deg);

  ${media.tablet`
     left: 386px;
  bottom: 44px;
  `}

  ${media.desktop`
    left: 292px;
  bottom: 0;
  `}
`;
