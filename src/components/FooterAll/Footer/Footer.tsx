import { Container, FooterContainer } from './Footer.styles';
import { Logo } from '../../shered/Logo/Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Link to="/">
          <Logo backgroundImage="light" />
        </Link>
      </Container>
    </FooterContainer>
  );
};
