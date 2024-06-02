import { StyledLink } from './Link.styles';
import { LinkPropsMore } from '../../../../interfaces/interfaces';

export const Link = ({ children, to, color = 'light' }: LinkPropsMore) => {
  return (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  );
};
