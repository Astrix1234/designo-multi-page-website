import { Container, FooterContainer } from './Footer.styles';
import { Logo } from '../../Shered/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Shered/Navigation/NavigationLinks/NavigationLinks';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Link to="/">
          <Logo backgroundImage="light" />
        </Link>
        <NavigationLinks color="light" />
      </Container>
    </FooterContainer>
  );
};
