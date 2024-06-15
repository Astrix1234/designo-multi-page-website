import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 24px 0 24px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }

  ${media.tablet`
    max-width: 768px;
    padding: 120px 40px 0 39px;

    & div {
      gap: 30px; 
      flex-direction: row;
      flex-wrap: wrap; 
    }
  `}
  ${media.desktop`
    padding: 160px 164px 0 165px; 
    max-width: 1440px;
    
    & div {
      flex-direction: row;
      flex-wrap: wrap;  
      gap: 30px;
    }    
  `}
`;
