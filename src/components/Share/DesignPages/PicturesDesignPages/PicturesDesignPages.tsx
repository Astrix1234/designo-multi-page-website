import { Container, PictureContainer } from './PicturesDesignPages.styles';
import { PicturesDesignPagesProps } from '../../../../interfaces/interfaces';
import { useMediaQuery } from 'react-responsive';
import { Picture } from '../../../Share/PicturesDesign/Picture/Picture';

export const PicturesDesignPages: React.FC<PicturesDesignPagesProps> = ({
  createImagesMobile,
  createImagesTablet,
  createImagesDesktop,
  navigate,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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
        )}
      </PictureContainer>
    </Container>
  );
};
