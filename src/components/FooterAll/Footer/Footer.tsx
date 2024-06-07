import {
  Container,
  FooterContainer,
  NavContainer,
  ContactsContainer,
  ContactsMediaContainer,
  ExtraContainer,
} from './Footer.styles';
import { Logo } from '../../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Share/Navigation/NavigationLinks/NavigationLinks';
import { FooterContacts } from '../FooterContacts/FooterContacts';
import { Media } from '../Media/Media';
import { GetInTouch } from '../GetInTouch/GetInTouch';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <FooterContainer>
      {!isContactPage && <GetInTouch />}
      {!isContactPage && <ExtraContainer></ExtraContainer>}
      <Container>
        <NavContainer>
          <Link to="/">
            <Logo $background="light" />
          </Link>
          <NavigationLinks color="light" />
        </NavContainer>
        <ContactsMediaContainer>
          <ContactsContainer>
            <FooterContacts />
          </ContactsContainer>
          <Media />
        </ContactsMediaContainer>
      </Container>
    </FooterContainer>
  );
};
