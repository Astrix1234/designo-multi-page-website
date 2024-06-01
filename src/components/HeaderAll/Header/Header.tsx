import { Container } from './Header.styles';
import { Logo } from '../../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Share/Navigation/NavigationLinks/NavigationLinks';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo background="dark" />
      </Link>
      <NavigationLinks color="dark" />
    </Container>
  );
};
