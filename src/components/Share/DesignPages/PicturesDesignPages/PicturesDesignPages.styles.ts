import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 24px 286px 24px;

  ${media.tablet`
    max-width: 768px;
    padding: 120px 40px 384px 39px;
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 160px 164px 380px 165px;   
  `}
`;

export const PictureContainer = styled.div`
  width: 100%;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${media.desktop`
  width: 100%;

    & div {
flex-direction: row;
    gap: 30px;
  }  
  `}
`;

export const TitlePlusLinkContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
