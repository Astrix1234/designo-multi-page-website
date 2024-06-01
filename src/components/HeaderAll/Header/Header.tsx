import { Container } from './Header.styles';
import { Logo } from '../../Shered/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Shered/Navigation/NavigationLinks/NavigationLinks';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo backgroundImage="dark" />
      </Link>
      <NavigationLinks color="dark" />
    </Container>
  );
};
