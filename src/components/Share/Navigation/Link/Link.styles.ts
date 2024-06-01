import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLinkProps } from '../../../../interfaces/interfaces';

const linkColor = {
  light: 'var(--white)',
  dark: 'var(--dark-grey)',
};

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${props => linkColor[props.color]};
`;
