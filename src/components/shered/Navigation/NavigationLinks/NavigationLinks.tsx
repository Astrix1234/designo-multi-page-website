import React from 'react';
import { Link } from '../Link/Link';
import { StyledLinkProps } from '../Link/Link.styles';
import { StyledNavigationLinks, StyledNavItem } from './NavigationLinks.styles';

const navigationObject = [
  {
    to: '/about',
    text: 'ABOUT',
  },
  {
    to: '/locations',
    text: 'LOCATIONS',
  },
  {
    to: '/contact',
    text: 'CONTACT',
  },
];

export const NavigationLinks: React.FC<StyledLinkProps> = ({
  color = 'light',
}) => {
  return (
    <StyledNavigationLinks>
      {navigationObject.map(navItem => (
        <StyledNavItem key={navItem.to}>
          <Link to={navItem.to} color={color}>
            {navItem.text}
          </Link>
        </StyledNavItem>
      ))}
    </StyledNavigationLinks>
  );
};
