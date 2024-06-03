import { Container } from './Media.styles';
import { IconFacebook } from '../../../Icons/IconsMedia/IconFacebooc';
import { IconInstagram } from '../../../Icons/IconsMedia/IconInstagram';
import { IconTwitter } from '../../../Icons/IconsMedia/IconTwitter';
import { IconYoutube } from '../../../Icons/IconsMedia/IconYoutube';
import { IconPinterest } from '../../../Icons/IconsMedia/IconPinterest';

const media = [
  { id: 1, icon: <IconFacebook /> },
  { id: 2, icon: <IconInstagram /> },
  { id: 3, icon: <IconTwitter /> },
  { id: 4, icon: <IconYoutube /> },
  { id: 5, icon: <IconPinterest /> },
];

export const Media = () => {
  return (
    <Container>
      {media.map(({ id, icon }) => (
        <a key={id} href="">
          {icon}
        </a>
      ))}
    </Container>
  );
};
