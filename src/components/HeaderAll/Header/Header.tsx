import { Container } from './Header.styles';
import { Logo } from '../../shered/Logo/Logo';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo backgroundImage="dark" />
      </Link>
    </Container>
  );
};
