import {
  Container,
  BgPatternLeafContainer,
  TextContainer,
  FeaturesContainer,
} from './Features.styles';
import { useCreateDataFeatures } from '../../../utils/useCreateDataFeatures';
import { BgPatternLeaf } from '../../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';

export const Features = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const data = useCreateDataFeatures();
  return (
    <FeaturesContainer>
      {isDesktop && (
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
            <TextContainer>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </TextContainer>
          </div>
        ))}
      </Container>
    </FeaturesContainer>
  );
};
