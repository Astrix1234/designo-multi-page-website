import {
  Container,
  LocationsContainer,
  BgPatternLeafContainer,
} from './Locations.styles';
import { useCreateDataLocations } from '../../../utils/useCreateDataLocations';
import { BgPatternLeaf } from '../../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

export const Locations = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const location = useLocation();

  const data = useCreateDataLocations();

  return (
    <LocationsContainer>
      {isDesktop && location.pathname === '/contact' && (
        <BgPatternLeafContainer>
          <BgPatternLeaf />
        </BgPatternLeafContainer>
      )}
      <Container>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              {item.icon}
              {item.circle}
            </div>
            <h4>{item.title}</h4>
            {item.button}
          </div>
        ))}
      </Container>
    </LocationsContainer>
  );
};
