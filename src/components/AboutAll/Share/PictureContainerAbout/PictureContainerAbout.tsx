import { PictureContainer } from './PictureContainerAbout.styles';
import { PictureContainerAboutProps } from '../../../../interfaces/interfaces';

export const PictureContainerAbout: React.FC<PictureContainerAboutProps> = ({
  mobileImage,
  tabletImage,
  desktopImage,
}) => {
  return (
    <PictureContainer
      mobileImage={mobileImage}
      tabletImage={tabletImage}
      desktopImage={desktopImage}
    />
  );
};
