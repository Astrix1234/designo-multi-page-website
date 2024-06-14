import { Container } from './TitlePlusLink.styles';
import { IconArrow } from '../../../../Icons/IconArrow/IconArrow';

export const TitlePlusLink = ({ title }: { title: string }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <div>
        <p>View Projects</p>
        <IconArrow />
      </div>
    </Container>
  );
};
