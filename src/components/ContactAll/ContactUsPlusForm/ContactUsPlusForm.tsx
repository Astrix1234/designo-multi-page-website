import {
  Container,
  ContentContainer,
  BgPatternContainer,
} from './ContactUsPlusForm.styles';
import { BgPatternHeroContactDesktop } from '../../../Icons/BgPatternHeroContactDesktop/BgPatternHeroContactDesktop';
import { BgPatternHeroContactMobil } from '../../../Icons/BgPatternHeroContactMobil/BgPatternHeroContactMobil';
import { useMediaQuery } from 'react-responsive';
import { ContactUs } from '../ContactUs/ContactUs';
import { ContactForm } from '../ContactForm/ContactForm';

export const ContactUsPlusForm = () => {
  const isTabletDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Container>
      <ContentContainer>
        <BgPatternContainer>
          {isTabletDesktop ? (
            <BgPatternHeroContactDesktop />
          ) : (
            <BgPatternHeroContactMobil />
          )}
        </BgPatternContainer>
        <ContactUs />
        <ContactForm />
      </ContentContainer>
    </Container>
  );
};
