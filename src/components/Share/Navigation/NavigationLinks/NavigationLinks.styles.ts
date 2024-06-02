import styled from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const StyledNavigationLinks = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 40px 0;
  border-top: 1px solid var(--white-10);
  margin-top: 32px;
  width: 100%;

  ${media.tablet`
    gap: 42px;
    flex-direction: row;
    padding: 0;
    border-top: none;
    width: auto;
    margin-top: 0;
  `}

  ${media.desktop`
    gap: 42px;
    flex-direction: row;
    padding: 0;
    border-top: none;
    width: auto;
     margin-top: 0;
  `}
`;

export const StyledNavItem = styled.li`
  display: flex;
`;
