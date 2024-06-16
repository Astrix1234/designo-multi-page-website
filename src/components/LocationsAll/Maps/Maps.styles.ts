import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const MapWrapper = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;

  ${media.tablet`
    border-radius: 20px;
    height: 326px;
  `}

  ${media.desktop`
    max-width: 350px;
    height: 350px;
  `}
`;
