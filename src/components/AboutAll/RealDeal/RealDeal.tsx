import {
  Container,
  ContentContainer,
  CircleContainer,
  Circle180Container,
  Circle90Container,
} from './RealDeal.styles';
import { TitleTextLightBg } from '../Share/TitleTextLightBg/TitleTextLightBg';
import { PictureContainerAbout } from '../Share/PictureContainerAbout/PictureContainerAbout';
import { PictureContainerAboutProps } from '../../../interfaces/interfaces';
import { useMediaQuery } from 'react-responsive';
import { CircleOne } from '../../../Icons/CircleOne/CircleOne';

export const RealDeal = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

  const pictureProps: PictureContainerAboutProps = {
    mobileImage: `${basename}/assets/about/mobile/image-real-deal.jpg`,
    tabletImage: `${basename}/assets/about/tablet/image-real-deal.jpg`,
    desktopImage: `${basename}/assets/about/desktop/image-real-deal.jpg`,
  };
  return (
    <Container>
      <ContentContainer>
        <PictureContainerAbout {...pictureProps} />
        <TitleTextLightBg
          title="The real deal"
          text="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
          textCont="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
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
