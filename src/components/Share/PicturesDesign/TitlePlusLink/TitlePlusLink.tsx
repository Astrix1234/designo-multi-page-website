import { Container } from './TitlePlusLink.styles';
import { IconArrow } from '../../../../Icons/IconArrow/IconArrow';

export const TitlePlusLink = () => {
  return (
    <Container>
      <h4>Web Design</h4>
      <div>
        <p>View Projects</p>
        <IconArrow />
      </div>
    </Container>
  );
};
