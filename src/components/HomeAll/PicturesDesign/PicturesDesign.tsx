import {
  Container,
  PictureContainer,
  BigPicture,
  TitlePlusLinkContainer,
} from './PicturesDesign.styles';
import { TitlePlusLink } from '../../Share/PicturesDesign/TitlePlusLink/TitlePlusLink';
import { useMediaQuery } from 'react-responsive';
import { Picture } from '../../Share/PicturesDesign/Picture/Picture';
import {
  createImagesDesktop,
  createImagesTablet,
  createImagesMobile,
} from '../../../utils/imagesDesignArrays';
import { useNavigate } from 'react-router-dom';

export const PicturesDesign = () => {
  const navigate = useNavigate();
  const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleClick = () => {
    navigate('/web-design');
  };

  return (
    <Container>
      <PictureContainer>
        {isMobile && (
          <div>
            {createImagesMobile(navigate).map((image, index) => (
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
            {createImagesTablet(navigate).map((image, index) => (
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
          <>
            <BigPicture onClick={handleClick}>
              <TitlePlusLinkContainer>
                <TitlePlusLink title="Web Design" />
              </TitlePlusLinkContainer>
              <img
                src={`${basename}/assets/home/desktop/image-web-design-large.jpg`}
                alt="Web Design"
              />
              <div className="overlay"></div>
            </BigPicture>
            <div>
              {createImagesDesktop(navigate).map((image, index) => (
                <Picture
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  onClick={image.onClick}
                />
              ))}
            </div>
          </>
        )}
      </PictureContainer>
    </Container>
  );
};
