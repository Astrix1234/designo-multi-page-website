import styled from 'styled-components';
import { media } from '../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ${media.desktop`
   max-width: 1440px;
  width: 100%;
   height: 155px;
    padding: 0 164px 0 165px; 
  `}

  ${media.tablet`
     max-width: 768px;
  width: 100%;
   height: 155px;
    padding: 0 40px 0 39px; 
  `}
`;
