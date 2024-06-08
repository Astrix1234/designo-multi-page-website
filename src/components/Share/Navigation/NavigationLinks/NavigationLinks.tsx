import React from 'react';
import { Link } from '../Link/Link';
import { StyledLinkProps } from '../../../../interfaces/interfaces';
import { StyledNavigationLinks, StyledNavItem } from './NavigationLinks.styles';
import { navigationObject } from '../../../../utils/navigation';

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
