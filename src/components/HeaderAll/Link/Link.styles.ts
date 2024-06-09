import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: var(--white);
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 24px;
  line-height: 25px;
  transition: text-decoration 0.3s ease-in-out;
`;
