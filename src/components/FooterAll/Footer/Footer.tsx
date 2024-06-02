import {
  Container,
  FooterContainer,
  NavContainer,
  ContactsContainer,
} from './Footer.styles';
import { Logo } from '../../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Share/Navigation/NavigationLinks/NavigationLinks';
import { FooterContacts } from '../FooterContacts/FooterContacts';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <NavContainer>
          <Link to="/">
            <Logo $background="light" />
          </Link>
          <NavigationLinks color="light" />
        </NavContainer>
        <ContactsContainer>
          <FooterContacts />
        </ContactsContainer>
      </Container>
    </FooterContainer>
  );
};
