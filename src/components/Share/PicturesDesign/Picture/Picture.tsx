import { PictureContainer, TitlePlusLinkContainer } from './Picture.styles';
import { TitlePlusLink } from '../TitlePlusLink/TitlePlusLink';
import { PictureProps } from '../../../../interfaces/interfaces';

export const Picture: React.FC<PictureProps> = ({ src, alt, onClick }) => {
  return (
    <PictureContainer onClick={onClick}>
      <TitlePlusLinkContainer>
        <TitlePlusLink title={alt} />
      </TitlePlusLinkContainer>
      <img src={src} alt={alt} />
      <div className="overlay"></div>
    </PictureContainer>
  );
};
