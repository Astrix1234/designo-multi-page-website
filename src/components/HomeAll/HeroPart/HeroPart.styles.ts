import styled, { keyframes } from 'styled-components';
import { media } from '../../../stylesheets/media';

const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const BgPatternLeafContainer = styled.div`
  position: absolute;
  top: 320px;
  z-index: -1;
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
  height: 843px;
  position: relative;
  overflow: hidden;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 2;

  & h1,
  & p,
  & div {
    z-index: 4;
  }

  & h1 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
    max-width: 327px;
    width: 100%;
    margin-top: 80px;
  }
  & p {
    font-size: 15px;
    line-height: 25px;
    max-width: 327px;
    width: 100%;
    margin: 24px 0;
  }

  ${media.tablet`
    border-radius: 20px;
    
    & h1 {
    font-size: 48px;
    line-height: 48px;
    max-width: 573px;
    margin-top: 60px;
  }
   & p {
    font-size: 16px;
    line-height: 26px;
    max-width: 445px;
     margin: 29px 0 19px 0;
  }
  `}

  ${media.desktop`
    height: 640px;
    text-align: left;
    padding-left: 95px;
    align-items: flex-start;
    
    & h1 {
    max-width: 540px;
    margin-top: 145px;
  }
   & p {
    margin: 30px 0 40px 0;
  }
  `}
`;

export const PictureContainer = styled.div`
  width: 624px;
  height: 913px;
  position: absolute;
  background-image: url(${basename}/assets/home/desktop/image-hero-phone.png);
  background-size: cover;
  background-repeat: no-repeat;
  left: 50%;
  transform: translateX(-50%);
  top: 310px;
  z-index: 4;

  ${media.tablet`
    top: 285px;
  `}

  ${media.desktop`
    top: -30px;
    left: 100%;
    transform: translateX(-90%);
  
  `}
`;

export const BgPatternContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  z-index: 3;

  ${media.tablet`
    left: 170px;
    top: 100px;
  `}

  ${media.desktop`
    left: 471px;
    top: 0;
  `}
`;
