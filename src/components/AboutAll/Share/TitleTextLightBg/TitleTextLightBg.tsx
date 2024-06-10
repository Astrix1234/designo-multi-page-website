import { Container } from './TitleTextLightBg.styles';
import { TitleTextLightBgProps } from '../../../../interfaces/interfaces';

export const TitleTextLightBg = ({
  title,
  text,
  textCont,
}: TitleTextLightBgProps) => {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{text}</p>
      <p>{textCont}</p>
    </Container>
  );
};
