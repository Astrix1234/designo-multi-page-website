import { Container } from './TilesGrid.styles';
import { TilesGridProps } from '../../../../interfaces/interfaces';
import { TilePages } from '../TilePages/TilePages';

export const TilesGrid: React.FC<TilesGridProps> = ({ tiles }) => {
  return (
    <Container>
      <div>
        {tiles.map((tile, index) => (
          <TilePages
            key={index}
            title={tile.title}
            src={tile.src}
            text={tile.text}
          />
        ))}
      </div>
    </Container>
  );
};
