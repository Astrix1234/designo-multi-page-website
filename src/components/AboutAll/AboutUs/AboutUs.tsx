import {
  Container,
  ContentContainer,
  CircleContainer,
  TextContainer,
} from './AboutUs.styles';
import { PictureContainerAbout } from '../Share/PictureContainerAbout/PictureContainerAbout';
import { PictureContainerAboutProps } from '../../../interfaces/interfaces';
import { CircleOneDarker } from '../../../Icons/CircleOneDarker/CircleOneDarker';
import { useMediaQuery } from 'react-responsive';
import { BgPatternHeroAbout } from '../../../Icons/BgPatternHeroAbout/BgPatternHeroAbout';

export const AboutUs = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

  const pictureProps: PictureContainerAboutProps = {
    mobileImage: `${basename}/assets/about/mobile/image-about-hero.jpg`,
    tabletImage: `${basename}/assets/about/tablet/image-about-hero.jpg`,
    desktopImage: `${basename}/assets/about/desktop/image-about-hero.jpg`,
  };
  return (
    <Container>
      <ContentContainer>
        <PictureContainerAbout {...pictureProps} />
        <TextContainer>
          <h2>About Us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </TextContainer>

        {isMobile ? (
          <CircleContainer>
            <CircleOneDarker />
          </CircleContainer>
        ) : (
          <CircleContainer>
            <BgPatternHeroAbout />
          </CircleContainer>
        )}
      </ContentContainer>
    </Container>
  );
};
