import styled, { css } from 'styled-components';
import { media } from '../../../../stylesheets/media';
import { PictureContainerAboutProps } from '../../../../interfaces/interfaces';

export const PictureContainer = styled.div<PictureContainerAboutProps>`
  width: 100%;
  height: 320px;
  background-image: url(${(props: PictureContainerAboutProps) =>
    props.mobileImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  ${media.tablet(css<PictureContainerAboutProps>`
    background-image: url(${(props: PictureContainerAboutProps) =>
      props.tabletImage});
  `)}

  ${media.desktop(css<PictureContainerAboutProps>`
    max-width: 476px;
    height: 100%;
    background-image: url(${(props: PictureContainerAboutProps) =>
      props.desktopImage});
  `)}
`;
