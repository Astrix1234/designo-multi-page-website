import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const PictureContainer = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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

  ${media.tablet`
    height: 200px;
  `}
  ${media.desktop`
    max-width: 541px;
    height: 308px;  
  `}
`;

export const TitlePlusLinkContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
