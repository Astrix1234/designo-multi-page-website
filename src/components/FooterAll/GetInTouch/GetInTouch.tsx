import {
  Container,
  ContentContainer,
  BgPatternContainer,
  TextContainer,
} from './GetInTouch.styles';
import { BgPatternCallToAction } from '../../../Icons/BgPatternCallToAction/BgPatternCallToAction';
import { Button } from '../../Share/Button/Button';
import { useNavigate } from 'react-router-dom';

export const GetInTouch = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <Container>
      <ContentContainer>
        <BgPatternContainer>
          <BgPatternCallToAction />
        </BgPatternContainer>
        <TextContainer>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </TextContainer>
        <div>
          <Button
            content="Get in touch"
            color="dark"
            $background="white"
            onClick={handleClick}
          />
        </div>
      </ContentContainer>
    </Container>
  );
};
