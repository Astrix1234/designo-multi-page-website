import { StyledLink } from './Link.styles';
import { LinkMobilProps } from '../../../interfaces/interfaces';

export const Link = ({ children, to }: LinkMobilProps) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
