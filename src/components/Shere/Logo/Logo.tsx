import { Container, LogoProps } from './Logo.styles';

export const Logo = ({ backgroundImage }: LogoProps) => {
  return <Container backgroundImage={backgroundImage} />;
};
