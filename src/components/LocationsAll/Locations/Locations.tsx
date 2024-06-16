import {
  Container,
  ContentContainer,
  TextContainer,
  CircleContainer,
  Circle180Container,
  Circle90Container,
} from './Locations.styles';
import { dataLocations } from '../../../utils/dataLocations';
import { Maps } from '../Maps/Maps';
import { useMediaQuery } from 'react-responsive';
import { CircleOne } from '../../../Icons/CircleOne/CircleOne';

export const Locations = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <Container>
      {dataLocations.map((location, index) => (
        <ContentContainer key={index}>
          <Maps position={location.position} />

          <TextContainer>
            <h4>{location.country}</h4>
            <div>
              <div>
                <p>{location.office}</p>
                <p>{location.street}</p>
                <p>{location.city}</p>
              </div>
              <div>
                <p>{location.contact}</p>
                <p>{location.phone}</p>
                <p>{location.email}</p>
              </div>
            </div>
          </TextContainer>
          {!isDesktop && (
            <CircleContainer>
              <CircleOne />
            </CircleContainer>
          )}
          <Circle180Container>
            <CircleOne />
          </Circle180Container>
          <Circle90Container>
            <CircleOne />
          </Circle90Container>
        </ContentContainer>
      ))}
    </Container>
  );
};
