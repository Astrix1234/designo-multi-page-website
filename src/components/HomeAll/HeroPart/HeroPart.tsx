import {
  Container,
  ContentContainer,
  PictureContainer,
  BgPatternContainer,
} from './HeroPart.styles';
import { BgPatternHeroHome } from '../../../Icons/BgPatternHeroHome/BgPatternHeroHome';
import { Button } from '../../Share/Button/Button';
import { useNavigate } from 'react-router-dom';

export const MainPart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <Container>
      <ContentContainer>
        <BgPatternContainer>
          <BgPatternHeroHome />
        </BgPatternContainer>
        <PictureContainer></PictureContainer>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <div>
          <Button
            content="Learn More"
            color="dark"
            $background="white"
            onClick={handleClick}
          />
        </div>
      </ContentContainer>
    </Container>
  );
};
