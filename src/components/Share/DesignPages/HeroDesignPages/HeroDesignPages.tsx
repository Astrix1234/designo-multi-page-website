import {
  ContentContainer,
  Container,
  HeroContainer,
  BgPatternLeafContainer,
  CircleContainer,
} from './HeroDesignPages.styles';
import { useMediaQuery } from 'react-responsive';
import { BgPatternLeaf } from '../../../../Icons/BgPatternLeaf/BgPatternLeaf';
import { CircleOneDarker } from '../../../../Icons/CircleOneDarker/CircleOneDarker';
import { BgPatternIntroApp } from '../../../../Icons/BgPatternIntroApp/BgPatternIntroApp';
import { BgPatternIntroGraphic } from '../../../../Icons/BgPatternIntroGraphic/BgPatternIntroGraphic';
import { BgPatternIntroWeb } from '../../../../Icons/BgPatternIntroWeb/BgPatternIntroWeb';
import { useLocation } from 'react-router-dom';

export const HeroDesignPages = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const location = useLocation();

  const isWebDesign = location.pathname === '/web-design';
  const isAppDesign = location.pathname === '/app-design';

  return (
    <HeroContainer>
      {isDesktop && (
        <BgPatternLeafContainer>
          <BgPatternLeaf />
        </BgPatternLeafContainer>
      )}
      <Container>
        <ContentContainer>
          {isMobile ? (
            <CircleContainer>
              <CircleOneDarker />
            </CircleContainer>
          ) : isWebDesign ? (
            <CircleContainer>
              <BgPatternIntroWeb />
            </CircleContainer>
          ) : isAppDesign ? (
            <CircleContainer>
              <BgPatternIntroApp />
            </CircleContainer>
          ) : (
            <CircleContainer>
              <BgPatternIntroGraphic />
            </CircleContainer>
          )}
          <h2>{title}</h2>
          <p>{text}</p>
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
};
