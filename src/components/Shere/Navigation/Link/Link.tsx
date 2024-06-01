import { StyledLink, StyledLinkProps } from './Link.styles';
import React from 'react';

interface LinkPropsMore extends StyledLinkProps {
  to: string;
  children: React.ReactNode;
}

export const Link = ({ children, to, color = 'light' }: LinkPropsMore) => {
  return (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  );
};
