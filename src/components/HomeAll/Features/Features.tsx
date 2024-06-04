import { Container, BgPatternLeafContainer } from './Features.styles';
import { useCreateDataFeatures } from '../../../utils/useCreateDataFeatures';
import { BgPatternLeaf } from '../../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';

export const Features = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const data = useCreateDataFeatures();
  return (
    <Container>
      {data.map((item, index) => (
        <div key={index}>
          <div>{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
      {isDesktop && (
        <BgPatternLeafContainer>
          <BgPatternLeaf />
        </BgPatternLeafContainer>
      )}
    </Container>
  );
};
