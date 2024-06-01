import { Container } from './Logo.styles';
import { LogoProps } from './Logo.styles';

export const Logo = ({ backgroundImage }: LogoProps) => {
  return <Container backgroundImage={backgroundImage} />;
};
