import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Form = styled.form`
  max-width: 327px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  & div {
    margin-top: auto;
  }

  ${media.tablet`
    max-width: 573px;

     & div {
    margin-left: auto;
  }
  `}

  ${media.desktop`
    max-width: 100%;
  `}
`;
