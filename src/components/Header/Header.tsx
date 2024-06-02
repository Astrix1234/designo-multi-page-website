import { Container, HederContainer } from './Header.styles';
import { Logo } from '../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../Share/Navigation/NavigationLinks/NavigationLinks';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const isTabletDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <HederContainer>
      <Container>
        <Link to="/">
          <Logo $background="dark" />
        </Link>
        {isTabletDesktop && <NavigationLinks color="dark" />}
      </Container>
    </HederContainer>
  );
};
