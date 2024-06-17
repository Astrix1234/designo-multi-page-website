import { TileProps } from '../../../../interfaces/interfaces';
import { Container, Image, Text } from './TilePages.styles';

export const TilePages: React.FC<TileProps> = ({ title, text, src }) => {
  return (
    <Container>
      <Image>
        <img src={src} alt={title} />
      </Image>
      <Text>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Text>
    </Container>
  );
};
