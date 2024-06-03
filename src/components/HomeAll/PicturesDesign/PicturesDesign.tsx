import {
  Container,
  PictureContainer,
  BigPicture,
  TitlePlusLinkContainer,
} from './PicturesDesign.styles';
import { TitlePlusLink } from '../../Share/PicturesDesignDesktop/TitlePlusLink/TitlePlusLink';
import { useMediaQuery } from 'react-responsive';

export const PicturesDesign = () => {
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <Container>
      <PictureContainer>
        {isDesktop && (
          <BigPicture>
            <TitlePlusLinkContainer>
              <TitlePlusLink />
            </TitlePlusLinkContainer>
            <img
              src={`${basename}/assets/home/desktop/image-web-design-large.jpg`}
              alt="Web Design"
            />
            <div className="overlay"></div>
          </BigPicture>
        )}
      </PictureContainer>
    </Container>
  );
};
