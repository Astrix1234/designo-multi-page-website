import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 0 39px;
  `}
  ${media.desktop`
    max-width: 1440px;
    padding: 160px 164px 700px 165px;   
  `}
`;

export const PictureContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 640px;
`;

export const BigPicture = styled.div`
  position: relative;
  height: 100%;
  width: 541px;
  border-radius: 20px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    opacity: 0.6;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    &:hover,
    &:focus {
      background-color: var(--peach);
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const TitlePlusLinkContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
