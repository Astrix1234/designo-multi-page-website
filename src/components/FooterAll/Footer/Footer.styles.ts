import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const FooterContainer = styled.footer`
  background-color: var(--black);
  color: var(--white);
  position: relative;
`;

export const Container = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;

  ${media.tablet`
    max-width: 768px;
    padding: 0 40px 0 39px;
    padding-bottom: 80px;
  `}

  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 0 165px;
    padding-bottom: 72px;
  `}
`;

export const ExtraContainer = styled.div`
  height: 189px;

  ${media.tablet`
    height: 86px;
  `}
  ${media.desktop`
   height: 72px;
  `}
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 64px;

  ${media.tablet`
    flex-direction: row;
    padding: 80px 0 40px 0;
    border-bottom: 1px solid var(--white-10);
    margin-bottom: 31px;
  `}
  ${media.desktop`
    padding: 72px 0 40px 0 ;
    flex-direction: row;
    border-bottom: 1px solid var(--white-10);
    margin-bottom: 31px;
  `}
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.tablet`
    flex-direction: row;
    gap: 10px;
  `}

  ${media.desktop`
    flex-direction: row;
    gap: 30px;
  `}
`;

export const ContactsMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `}

  ${media.desktop`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `}
`;
