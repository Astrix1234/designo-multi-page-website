import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLinkProps } from '../../../../interfaces/interfaces';

const linkColor = {
  light: 'var(--white)',
  dark: 'var(--dark-grey)',
};

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${props => linkColor[props.color]};
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 14px;
  transition: text-decoration 0.3s ease-in-out;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
