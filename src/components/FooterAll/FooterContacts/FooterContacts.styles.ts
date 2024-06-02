import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  & address,
  & div {
    color: var(--white-50);
    line-height: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;

    ${media.tablet`
    align-items: flex-start;
  `}

    ${media.desktop`
    align-items: flex-start;
  `}
  }
  & address > p:first-child {
    font-weight: bold;
  }
  & div {
    ${media.tablet`
    font-weight: bold;
  `}

    ${media.desktop`
    font-weight: bold;
  `}
  }
  & div > p {
    font-weight: bold;
  }

  ${media.tablet`
    flex-direction: row;
    gap: 55px;
  `}

  ${media.desktop`
    flex-direction: row;
    gap: 200px;
  `}
`;
