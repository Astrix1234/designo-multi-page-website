import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--white);

  & h4 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.4px;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 16px;

    & p {
      font-size: 15px;
      line-height: 25px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
  }

  ${media.tablet`
    gap: 24px;

    & h4 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

    & div {
    gap: 21px;

    & p {
      line-height: auto;
    }
  }
  `}

  ${media.desktop`
    gap: 24px;

     & h4 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

    & div {
    gap: 21px;

    & p {
      line-height: auto;
    }
  }
  `}
`;
