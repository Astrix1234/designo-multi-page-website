import { Container, FooterContainer } from './Footer.styles';
import { Logo } from '../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../Share/Navigation/NavigationLinks/NavigationLinks';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Link to="/">
          <Logo background="light" />
        </Link>
        <NavigationLinks color="light" />
      </Container>
    </FooterContainer>
  );
};
