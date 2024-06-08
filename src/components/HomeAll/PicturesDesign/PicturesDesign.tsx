import {
  Container,
  PictureContainer,
  BigPicture,
  TitlePlusLinkContainer,
} from './PicturesDesign.styles';
import { TitlePlusLink } from '../../Share/PicturesDesign/TitlePlusLink/TitlePlusLink';
import { useMediaQuery } from 'react-responsive';
import { Picture } from '../../Share/PicturesDesign/TitlePlusLink/Picture/Picture';
import {
  imagesDesktop,
  imagesTablet,
  imagesMobile,
} from '../../../utils/picturesDesignArrays';

export const PicturesDesign = () => {
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Container>
      <PictureContainer>
        {isMobile && (
          <div>
            {imagesMobile.map((image, index) => (
              <Picture
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={image.onClick}
              />
            ))}
          </div>
        )}
        {isTablet && (
          <div>
            {imagesTablet.map((image, index) => (
              <Picture
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={image.onClick}
              />
            ))}
          </div>
        )}
        {isDesktop && (
          <BigPicture onClick={handleClick}>
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
        {isDesktop && (
          <div>
            {imagesDesktop.map((image, index) => (
              <Picture
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={image.onClick}
              />
            ))}
          </div>
        )}
      </PictureContainer>
    </Container>
  );
};
