import {
  Container,
  ContentContainer,
  BgPatternContainer,
  HeroContainer,
  BgPatternLeafContainer,
} from './ContactUsPlusForm.styles';
import { BgPatternLeaf } from '../../../Icons/BgPatternLeaf/BgPatternLeaf';
import { BgPatternHeroContactDesktop } from '../../../Icons/BgPatternHeroContactDesktop/BgPatternHeroContactDesktop';
import { BgPatternHeroContactMobil } from '../../../Icons/BgPatternHeroContactMobil/BgPatternHeroContactMobil';
import { useMediaQuery } from 'react-responsive';
import { ContactUs } from '../ContactUs/ContactUs';
import { ContactForm } from '../ContactForm/ContactForm';

export const ContactUsPlusForm = () => {
  const isTabletDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <HeroContainer>
      {isDesktop && (
        <BgPatternLeafContainer>
          <BgPatternLeaf />
        </BgPatternLeafContainer>
      )}
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
    </HeroContainer>
  );
};
