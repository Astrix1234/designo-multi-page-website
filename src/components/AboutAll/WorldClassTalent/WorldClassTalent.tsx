import {
  Container,
  ContentContainer,
  CircleContainer,
  Circle180Container,
  Circle90Container,
} from './WorldClassTalent.styles';
import { TitleTextLightBg } from '../Share/TitleTextLightBg/TitleTextLightBg';
import { PictureContainerAbout } from '../Share/PictureContainerAbout/PictureContainerAbout';
import { PictureContainerAboutProps } from '../../../interfaces/interfaces';
import { useMediaQuery } from 'react-responsive';
import { CircleOne } from '../../../Icons/CircleOne/CircleOne';

export const WorldClassTalent = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

  const pictureProps: PictureContainerAboutProps = {
    mobileImage: `${basename}/assets/about/mobile/image-world-class-talent.jpg`,
    tabletImage: `${basename}/assets/about/tablet/image-world-class-talent.jpg`,
    desktopImage: `${basename}/assets/about/desktop/image-world-class-talent.jpg`,
  };
  return (
    <Container>
      <ContentContainer>
        <PictureContainerAbout {...pictureProps} />
        <TitleTextLightBg
          title="World-class talent"
          text="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
          textCont="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        />
        {!isDesktop && (
          <CircleContainer>
            <CircleOne />
          </CircleContainer>
        )}
        <Circle180Container>
          <CircleOne />
        </Circle180Container>
        <Circle90Container>
          <CircleOne />
        </Circle90Container>
      </ContentContainer>
    </Container>
  );
};
