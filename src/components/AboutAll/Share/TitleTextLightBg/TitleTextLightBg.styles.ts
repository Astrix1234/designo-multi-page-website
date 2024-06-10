import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const Container = styled.div`
  max-width: 327px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;

  & h4 {
    font-size: 32px;
    line-height: 36px;
    color: var(--peach);
  }

  & p {
    font-size: 15px;
    line-height: 25px;
    color: var(--dark-grey);
  }

  ${media.tablet`
    max-width: 572px;

      & h4  {
    font-size: 40px;
    line-height: 48px;
    }

     & p {
    font-size: 16px;
    line-height: 26px;
  }
  `}

  ${media.desktop`
    max-width: 445px;
    text-align: left;
    align-items: flex-start;
  `}
`;
